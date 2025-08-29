import { db } from "@/db/drizzle";
import { movie, todo } from "@/db/schema";
import { desc, eq } from "drizzle-orm";

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
