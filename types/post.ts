export type PostType = {
  publishedTime?: string;
  modifiedTime?: string;
  description?: string;
  image?: string;
  slug: string;
  title: string;
  type: 'notes' | 'golang';
};
