import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
export const tokesnsTable = pgTable("tokens_table", {
  userId: text("id").notNull().unique(),
  access_token: text("access_token").notNull().primaryKey(),
  refresh_token: text("refresh_token").notNull(),
  expire_at: integer("expire_at").notNull(),
});
