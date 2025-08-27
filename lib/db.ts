import { db } from "@/db/drizzle";
import { todo } from "@/db/schema";

export const getTodos = async () => {
  return await db.select().from(todo).orderBy(todo.createdAt);
};
