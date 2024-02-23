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
        title: 'Golang notes',
        description: 'My golang notes',
      }}
      favIcon={noteIcon}
    >
      <p>Some notes when learning Web Development in Go</p>
      <div className="my-0.5">
        {posts.map(post => (
          <Note
            key={post.slug}
            slug={post.slug}
            title={post.title}
            modifiedTime={post.modifiedTime}
            description={post.description}
            image={post.image}
            type="golang"
          />
        ))}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts('golang', [
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
