import React from 'react';
import { GetStaticProps } from 'next';
import { getAllPosts } from '@lib/api';
import { helloIcon } from '@lib/icons';
import {
  Layout,
  Gap,
  Projects,
  Header,
  Languages,
  Frontend,
  Backend,
} from '@components/index';
import { Title } from '@components/Welcome';
import projects from '@lib/projects';
import { PostType } from '../types/post';
import TimeLine from '@components/Contact/TimeLine';

type IndexProps = {
  posts: PostType[];
};

export const Index = ({ posts }: IndexProps): JSX.Element => {
  return (
    <Layout favIcon={helloIcon}>
      <Header />
      <div className="flex flex-col md:flex-row lg:flex-row justify-center">
        <TimeLine />
        <Gap.M />
        <div className="flex flex-col">
          <Title message="Languages" />
          <Languages />
          <Gap.S />
          <Title message="Frontend" />
          <Frontend />
          <Gap.S />
          <Title message="Backend, Database" />
          <Backend />
        </div>
      </div>

      <Gap.M />
      <Title message="My Projects" />
      <Projects projects={projects} />
      <Gap.M />
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
