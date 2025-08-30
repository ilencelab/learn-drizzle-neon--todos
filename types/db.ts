import { movie, todo } from "@/db/schema";
import { TMDBMovie } from "@/lib/tmdb";
import { InferSelectModel } from "drizzle-orm";

export type Todo = InferSelectModel<typeof todo>;

export type WatchedMovie = InferSelectModel<typeof movie>;

export type MovieWithWatchedInfo = TMDBMovie & {
  seen: boolean;
  watchedId?: number;
  watchedAt?: string;
  rating?: number;
  thoughts?: string | null;
};
