import type { article as Article } from "@prisma/client";

export type CreateArticleArg = Omit<
  Article,
  "id" | "uuid" | "created_at" | "updated_at" | "is_active"
>;
