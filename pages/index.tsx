import React from 'react';
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
import TimeLine from '@components/Contact/TimeLine';
import { DevTools } from '@components/Tech';

export const Index = (): JSX.Element => {
  return (
    <Layout favIcon={helloIcon}>
      <Header />
      <div className="flex flex-col md:flex-row lg:flex-row justify-center">
        <TimeLine />
        <Gap.M />
        <div className="flex flex-col gap-0.5">
          <Title message="Languages" />
          <Languages />
          <Gap.XS />
          <Title message="Frontend" />
          <Frontend />
          <Gap.XS />
          <Title message="Backend" />
          <Backend />
          <Gap.XS />
          <Title message="Tools" />
          <DevTools />
        </div>
      </div>
      <Gap.M />
      <Title message="My Projects" />
      <Projects projects={projects} />
      <Gap.M />
    </Layout>
  );
};

export default Index;
