import React from 'react';
import { PostType } from '../../types/post';
import Link from 'next/dist/client/link';
import { formatDate } from 'utils/format';

const Note: React.FC<PostType> = post => {
  return (
    <article className="bg-color-theme mt-5" style={{ borderRadius: '25px' }}>
      <div style={{ padding: '20px 20px 5px 20px' }}>
        <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
          {formatDate(post.modifiedTime)}
        </p>
        <h1 className="mb-2 text-xl">
          <Link
            as={`/posts/${post.slug}`}
            href={`/posts/[slug]`}
            className="text-gray-900 dark:text-white dark:hover:text-blue-400"
          >
            🖍️ {post.title}
          </Link>
        </h1>
        <p className="mb-3">{post.description}</p>
        <p>
          <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
            Read More
          </Link>
        </p>
      </div>
    </article>
  );
};

export default Note;
