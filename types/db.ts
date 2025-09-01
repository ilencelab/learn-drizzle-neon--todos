import { movie, todo } from "@/db/schema";
import { TMDBSearchResult } from "@/lib/tmdb";
import { InferSelectModel } from "drizzle-orm";

export type Todo = InferSelectModel<typeof todo>;

export type WatchedMovie = InferSelectModel<typeof movie>;

type WatchedMovieData = InferSelectModel<typeof movie>;
type MovieWatchedInfo = Pick<
  WatchedMovieData,
  "id" | "watchedAt" | "rating" | "thoughts" | "createdAt" | "userId"
>;
export type SeenMovie = MovieWatchedInfo & {
  tmdbData: TMDBSearchResult;
};

export type MovieWithWatchedInfo = TMDBSearchResult & {
  seen: boolean;
  watchedId?: number;
  watchedAt?: string;
  rating?: number;
  thoughts?: string | null;
};
