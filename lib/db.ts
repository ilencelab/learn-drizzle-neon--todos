import { db } from "@/db/drizzle";
import { todo } from "@/db/schema";
import { eq } from "drizzle-orm";

export const getTodos = async (userId: string) => {
  return await db
    .select()
    .from(todo)
    .where(eq(todo.userId, userId))
    .orderBy(todo.createdAt);
};
