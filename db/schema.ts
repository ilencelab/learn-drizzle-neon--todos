import {
  boolean,
  foreignKey,
  integer,
  pgEnum,
  pgSchema,
  pgTable,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

//

export const todo = pgTable(
  "todo",
  {
    id: integer("id").primaryKey().generatedAlwaysAsIdentity().notNull(),
    userId: text("user_id").notNull(),
    text: text("text").notNull(),
    done: boolean("done").default(false).notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
  },
  (table) => [
    foreignKey({
      columns: [table["userId"]],
      foreignColumns: [user.id],
    }),
  ],
);

//
export const mediaTypeEnum = pgEnum("media_type", ["movie", "tv"]);

export const movie = pgTable(
  "movie",
  {
    id: integer("id").primaryKey().generatedAlwaysAsIdentity().notNull(),
    userId: text("user_id").notNull(),
    //
    watchedAt: text("watched_at").notNull(), // 看完日期
    rating: integer("rating").notNull(), // 评分
    thoughts: text("thoughts"), // 想法
    // 电影元数据
    tmdbId: integer("tmdb_id").notNull(),
    title: text("title").notNull(),
    releaseDate: text("release_date").notNull(),
    posterUrl: text("poster_url").notNull(),
    backdropUrl: text("backdrop_url").notNull(),
    originalTitle: text("original_title").notNull(),
    originalLanguage: text("original_language").notNull(),
    mediaType: mediaTypeEnum("media_type").notNull(),
    //
    createdAt: timestamp("created_at").notNull().defaultNow(),
  },
  (table) => [
    foreignKey({
      columns: [table["userId"]],
      foreignColumns: [user.id],
    }),
  ],
);

//

export const auth = pgSchema("auth");

export const user = auth.table("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified")
    .$defaultFn(() => false)
    .notNull(),
  image: text("image"),
  createdAt: timestamp("created_at")
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
  updatedAt: timestamp("updated_at")
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
});

export const session = auth.table("session", {
  id: text("id").primaryKey(),
  expiresAt: timestamp("expires_at").notNull(),
  token: text("token").notNull().unique(),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
});

export const account = auth.table("account", {
  id: text("id").primaryKey(),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: timestamp("access_token_expires_at"),
  refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

export const verification = auth.table("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").$defaultFn(
    () => /* @__PURE__ */ new Date(),
  ),
  updatedAt: timestamp("updated_at").$defaultFn(
    () => /* @__PURE__ */ new Date(),
  ),
});

export const authSchema = { user, session, account, verification };
