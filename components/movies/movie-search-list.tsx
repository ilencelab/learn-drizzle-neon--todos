import { MovieDialog } from "@/components/movies/movie-dialog";
import { MovieItem } from "@/components/movies/movie-item";
import { getCurrentUser } from "@/lib/auth";
import { appendMoviesWithWatchedInfo } from "@/lib/db";
import { searchMedia } from "@/lib/tmdb";

export async function MovieSearchList({ query }: { query: string }) {
  const movies = query ? await searchMedia(query) : [];

  if (!movies || movies.length === 0) {
    return <div className="py-8 text-center text-gray-500">暂无搜索结果</div>;
  }

  const user = await getCurrentUser();
  const moviesWithWatchedInfo = await appendMoviesWithWatchedInfo(
    movies,
    user.id,
  );

  return (
    <ul className="space-y-4">
      {moviesWithWatchedInfo.map((movie) => (
        <li
          key={movie.id}
          className="relative rounded-lg bg-white p-3 shadow sm:p-4"
        >
          <MovieItem movie={movie} />
          <MovieDialog movie={movie} />
        </li>
      ))}
    </ul>
  );
}
