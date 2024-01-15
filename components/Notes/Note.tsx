import React from 'react';
import { PostType } from '../../types/post';
import Link from 'next/dist/client/link';
import { formatDate } from 'utils/format';

const Note: React.FC<PostType> = post => {
  return (
    <article className="mt-5 bg-zinc-500 rounded-lg font-mono shadow-md shadow-zinc-500">
      <div className="p-4">
        <p className="mb-1 text-sm text-gray-300">
          {formatDate(post.modifiedTime)}
        </p>
        <h1 className="mb-2 text-xl">
          <Link
            as={`/posts/${post.slug}`}
            href={`/posts/[slug]`}
            className="text-yellow-500 hover:text-yellow-400"
          >
            🖍️ {post.title}
          </Link>
        </h1>
        <p className="mb-3">{post.description}</p>
        <p className="mb-0">
          <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
            Read More
          </Link>
        </p>
      </div>
    </article>
  );
};

export default Note;
