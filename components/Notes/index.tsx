import React from 'react';
import Note from './Note';

const Notes: React.FC<{ posts }> = ({ posts }) => (
  <div className="my-0.5">
    {posts.map(post => (
      <Note
        key={post.slug}
        slug={post.slug}
        title={post.title}
        modifiedTime={post.modifiedTime}
        description={post.description}
        image={post.image}
        type={post.type}
      />
    ))}
  </div>
);

export default Notes;
