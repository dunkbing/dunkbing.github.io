import { GetStaticProps } from 'next';
import React from 'react';
import Layout from '../components/Layout';
import Note from '../components/Notes/Note';
import { Title } from '../components/Welcome';
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
        title: 'All Notes',
        description: 'All of my notes',
      }}
      favIcon={noteIcon}
    >
      <Title message="All Notes" />
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
          />
        ))}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts([
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
