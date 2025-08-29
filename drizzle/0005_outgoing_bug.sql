CREATE TABLE "movie" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "movie_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"user_id" text NOT NULL,
	"watched_at" timestamp NOT NULL,
	"rating" integer NOT NULL,
	"thoughts" text,
	"title" text NOT NULL,
	"release_date" text NOT NULL,
	"poster_url" text,
	"backdrop_url" text,
	"original_title" text,
	"original_language" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "movie" ADD CONSTRAINT "movie_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "auth"."user"("id") ON DELETE no action ON UPDATE no action;