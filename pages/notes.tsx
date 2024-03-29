import { GetStaticProps } from 'next';
import React from 'react';
import Layout from '../components/Layout';
import Note from '../components/Notes/Note';
import { getAllPosts } from '../lib/api';
import { noteIcon } from '../lib/icons';
import { PostType } from '../types/post';

type NotesProps = {
  posts: PostType[];
};

export const Notes = ({ posts }: NotesProps): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'Notes',
        description: 'My notes',
      }}
      favIcon={noteIcon}
    >
      <p>This is where I store my notes.</p>
      <div className="my-0.5">
        {posts.map(post => (
          <Note
            key={post.slug}
            slug={post.slug}
            title={post.title}
            modifiedTime={post.modifiedTime}
            description={post.description}
            image={post.image}
            type="notes"
          />
        ))}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts('notes', [
    'modifiedTime',
    'description',
    'slug',
    'title',
  ]);

  return {
    props: { posts },
  };
};

export default Notes;
