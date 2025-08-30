import { db } from "@/db/drizzle";
import { movie, todo } from "@/db/schema";
import { TMDBMovie } from "@/lib/tmdb";
import { MovieWithWatchedInfo } from "@/types/db";
import { and, desc, eq, inArray } from "drizzle-orm";

export const getTodos = async (userId: string) => {
  return await db
    .select()
    .from(todo)
    .where(eq(todo.userId, userId))
    .orderBy(todo.createdAt);
};

export const getWatchedMovies = async (userId: string) => {
  return await db
    .select()
    .from(movie)
    .where(eq(movie.userId, userId))
    .orderBy(desc(movie.createdAt));
};

// 为搜索到的 movies 添加已观看信息
export const appendMoviesWithWatchedInfo = async (
  movies: TMDBMovie[],
  userId: string,
): Promise<MovieWithWatchedInfo[]> => {
  // 提取所有电影的 tmdbId
  const tmdbIds = movies.map((m) => m.id);

  // 批量查询所有已观看的电影
  const watchedMovies = await db
    .select({
      id: movie.id,
      tmdbId: movie.tmdbId,
      watchedAt: movie.watchedAt,
      rating: movie.rating,
      thoughts: movie.thoughts,
    })
    .from(movie)
    .where(and(eq(movie.userId, userId), inArray(movie.tmdbId, tmdbIds)));

  // 将查询结果映射为 tmdbId 的字典，方便后续匹配
  const watchedMap = watchedMovies.reduce(
    (acc, curr) => {
      acc[curr.tmdbId] = curr;
      return acc;
    },
    {} as Record<
      string,
      { id: number; watchedAt: string; rating: number; thoughts: string | null }
    >,
  );

  // 遍历 movies，判断每一部电影是否已观看
  const result = movies.map((m) => {
    const watched = watchedMap[m.id];

    if (watched) {
      // 已看过，合并信息
      return {
        ...m,
        seen: true,
        watchedId: watched.id,
        watchedAt: watched.watchedAt,
        rating: watched.rating,
        thoughts: watched.thoughts,
      };
    } else {
      // 未看过
      return {
        ...m,
        seen: false,
      };
    }
  });

  return result;
};
