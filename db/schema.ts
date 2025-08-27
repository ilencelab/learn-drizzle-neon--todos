import {
  boolean,
  integer,
  pgTable,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const todo = pgTable("todo", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity().notNull(),
  text: text("text").notNull(),
  done: boolean("done").default(false).notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});
