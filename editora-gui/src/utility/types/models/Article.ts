export type Article = {
  id: number;
  uuid: string;
  title: string;
  author: string;
  published: boolean;
  summary?: string;
  published_at?: Date;
  created_at: Date;
  updated_at: Date;
};
