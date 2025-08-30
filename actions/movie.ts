"use server";

import { db } from "@/db/drizzle";
import { movie } from "@/db/schema";
import { InferInsertModel, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const addMovie = async (data: InferInsertModel<typeof movie>) => {
  await db.insert(movie).values(data);
  revalidatePath("/dashboard/movies");
};

export const editMovie = async (
  id: number,
  data: Partial<InferInsertModel<typeof movie>>,
) => {
  await db.update(movie).set(data).where(eq(movie.id, id));
  revalidatePath("/dashboard/movies");
};
