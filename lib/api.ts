import fs from 'fs/promises';
import matter from 'gray-matter';
import { join } from 'path';
import { POSTS_PATH } from '../utils/mdxUtils';

export async function getPostSlugs(): Promise<string[]> {
  return fs.readdir(POSTS_PATH);
}

type PostItems = {
  [key: string]: string;
};

export async function getPostBySlug(slug: string, fields: string[] = []): Promise<PostItems> {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = join(POSTS_PATH, `${realSlug}.mdx`);
  const fileContents = await fs.readFile(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items: PostItems = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
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

export async function getAllPosts(fields: string[] = []): Promise<PostItems[]> {
  const slugs = await getPostSlugs();
  const postsBySlugs = await Promise.all(slugs.map(slug => getPostBySlug(slug, fields)));
  // sort posts by date in descending order
  return postsBySlugs.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}
