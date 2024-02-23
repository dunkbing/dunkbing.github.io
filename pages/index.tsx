import React from 'react';
import { helloIcon } from '@lib/icons';
import { Layout, Projects } from '@components/index';
import projects from '@lib/projects';

export const Index = (): JSX.Element => {
  return (
    <Layout favIcon={helloIcon}>
      <Projects projects={projects} />
    </Layout>
  );
};

export default Index;
