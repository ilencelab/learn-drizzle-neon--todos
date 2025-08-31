import { movie, todo } from "@/db/schema";
import { TMDBMovie } from "@/lib/tmdb";
import { InferSelectModel } from "drizzle-orm";

export type Todo = InferSelectModel<typeof todo>;

export type WatchedMovie = InferSelectModel<typeof movie>;

type WatchedMovieData = InferSelectModel<typeof movie>;
type MovieWatchedInfo = Pick<
  WatchedMovieData,
  "id" | "watchedAt" | "rating" | "thoughts" | "createdAt" | "userId"
>;
export type SeenMovie = MovieWatchedInfo & {
  tmdbData: TMDBMovie;
};

export type MovieWithWatchedInfo = TMDBMovie & {
  seen: boolean;
  watchedId?: number;
  watchedAt?: string;
  rating?: number;
  thoughts?: string | null;
};
