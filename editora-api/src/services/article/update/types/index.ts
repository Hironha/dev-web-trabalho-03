import type { article as Article } from '@prisma/client';

export type UpdateArticleArg = Partial<
  Omit<Article, 'id' | 'uuid' | 'created_at' | 'updated_at'>
> &
  Pick<Article, 'id'>;
