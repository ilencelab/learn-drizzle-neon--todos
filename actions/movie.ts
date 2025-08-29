"use server";

import { db } from "@/db/drizzle";
import { movie } from "@/db/schema";
import { InferInsertModel } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const addMovie = async (data: InferInsertModel<typeof movie>) => {
  await db.insert(movie).values(data);
  revalidatePath("/dashboard/movies");
};
