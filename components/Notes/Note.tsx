import React from 'react';
import { format, parseISO } from 'date-fns';
import { PostType } from '../../types/post';
import Link from 'next/dist/client/link';

const Note: React.FC<PostType> = post => {
  return (
    <article className="bg-color-theme mt-5" style={{ borderRadius: '25px' }}>
      <div style={{ padding: '20px 20px 5px 20px' }}>
        <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
          {format(parseISO(post.modifiedTime), 'MMMM dd, yyyy')}
        </p>
        <h1 className="mb-2 text-xl">
          <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
            <a className="text-gray-900 dark:text-white dark:hover:text-blue-400">
              🖍️ {post.title}
            </a>
          </Link>
        </h1>
        <p className="mb-3">{post.description}</p>
        <p>
          <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
            <a>Read More</a>
          </Link>
        </p>
      </div>
    </article>
  );
};

export default Note;
