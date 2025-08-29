import { movie, todo } from "@/db/schema";
import { InferSelectModel } from "drizzle-orm";

export type Todo = InferSelectModel<typeof todo>;

export type WatchedMovie = InferSelectModel<typeof movie>;
