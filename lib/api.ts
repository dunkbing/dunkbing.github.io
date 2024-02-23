import fs from 'fs/promises';
import matter from 'gray-matter';
import { join } from 'path';
import { POSTS_PATH } from '../utils/mdxUtils';

type PostType = 'notes' | 'golang';

export async function getPostSlugs(type_: PostType): Promise<string[]> {
  return fs.readdir(join(POSTS_PATH, type_));
}

type PostItems = {
  [key: string]: string;
};

export async function getPostBySlug(
  type_: PostType,
  slug: string,
  fields: string[] = []
): Promise<PostItems> {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = join(POSTS_PATH, type_, `${realSlug}.mdx`);
  const fileContents = await fs.readFile(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items: PostItems = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export async function getAllPosts(
  type_: PostType,
  fields: string[] = []
): Promise<PostItems[]> {
  const slugs = await getPostSlugs(type_);
  const postsBySlugs = await Promise.all(
    slugs.map(slug => getPostBySlug(type_, slug, fields))
  );
  // sort posts by date in descending order
  return postsBySlugs.sort((post1, post2) =>
    post1.modifiedTime > post2.modifiedTime ? -1 : 1
  );
}
