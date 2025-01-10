CREATE TABLE "tokens_table" (
	"id" text PRIMARY KEY NOT NULL,
	"access_token" text NOT NULL,
	"refresh_token" text NOT NULL,
	"expire_at" integer NOT NULL
);
