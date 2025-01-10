CREATE TABLE "tokens_table" (
	"id" text NOT NULL,
	"access_token" text PRIMARY KEY NOT NULL,
	"refresh_token" text NOT NULL,
	"expire_at" integer NOT NULL
);
