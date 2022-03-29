import React from 'react';
import { GetStaticProps } from 'next';
import { getAllPosts } from '@lib/api';
import { helloIcon } from '@lib/icons';
import {
  Layout,
  PostCard,
  Gap,
  Projects,
  Contact,
  Header,
  Languages,
  Frontend,
  Backend,
} from '@components/index';
import { Title } from '@components/Welcome';
import projects from '@lib/projects';
import { PostType } from '@types/post';

type IndexProps = {
  posts: PostType[];
};

export const Index = ({ posts }: IndexProps): JSX.Element => {
  return (
    <Layout favIcon={helloIcon}>
      <Header />
      <Contact />
      <Gap.M />
      <Title message="Languages Known" />
      <Languages />
      <Title message="Frontend" />
      <Frontend />
      <Title message="Backend, Database" />
      <Backend />
      <Gap.M />
      <Title message="My Projects" />
      <Projects projects={projects} />
      <Gap.M />
      <Title message="My Notes" />
      <div className="my-0.5">
        {posts.map(post => (
          <PostCard
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

export default Index;
