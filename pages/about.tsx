import React from 'react';
import Layout from '../components/Layout';
import TimeLine from '../components/TimeLine';
import Welcome from '../components/Welcome';

export const About = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: '👋 Hello',
      }}
    >
      <Welcome message="Hello" />
      <TimeLine />
      <h1>About Page</h1>
      <p>Welcome to the about page</p>
    </Layout>
  );
};

export default About;
