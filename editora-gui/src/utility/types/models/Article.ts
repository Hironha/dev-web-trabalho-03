export type Article = {
  id: number;
  uuid: string;
  title: string;
  author: string;
  published: boolean;
  summary?: string;
  published_at?: Date;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
};
