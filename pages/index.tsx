import React from 'react';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import Layout from '../components/Layout';
import PostCard from '../components/PostCard';
import TimeLine from '../components/TimeLine';
import Welcome from '../components/Welcome';
import { getAllPosts } from '../lib/api';
import { PostType } from '../types/post';
import profilePic from '../public/images/profile.jpg';
import cyberPurr from '../public/images/projects/cyber-purr/1.png';
import bonkingBall from '../public/images/projects/jumping-ball/1.png';
import { helloIcon } from '../lib/icon';
import { FiTwitter, FiInstagram, FiGithub, FiFacebook } from 'react-icons/fi';
import Projects from '../components/Projects';

type IndexProps = {
  posts: PostType[];
};

export const Index = ({ posts }: IndexProps): JSX.Element => {
  return (
    <Layout favIcon={helloIcon}>
      <div className="flex flex-row">
        <div
          style={{
            width: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          className="flex-auto"
        >
          <Image
            className="image rounded-full"
            width="100%"
            height="100%"
            src={profilePic}
            alt="profile_pic"
          />
        </div>
        <div className="mx-3">
          <Welcome message="Hello" />
          <p>
            I am Bui Dang Binh, a software engineering student and graphics
            programming enthusiast.
          </p>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          verticalAlign: 'center',
        }}
      >
        <TimeLine />
        <p style={{ marginBottom: 0 }}>
          See my full{' '}
          <a href="/resume.docx" download>
            Resume
          </a>
        </p>
        <p style={{ display: 'flex', flexDirection: 'row' }}>
          Find me on{' '}
          <a
            href="https://twitter.com/Bing_Dunk"
            target="_blank"
            rel="noreferrer"
          >
            <FiTwitter style={{ marginLeft: 10, marginTop: 4 }} />
          </a>
          <a
            href="https://www.instagram.com/dunkbingg/"
            target="_blank"
            rel="noreferrer"
          >
            <FiInstagram style={{ marginLeft: 10, marginTop: 4 }} />
          </a>
          <a
            href="https://github.com/dunkbing"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub style={{ marginLeft: 10, marginTop: 4 }} />
          </a>
          <a
            href="https://www.facebook.com/dunkbingg/"
            target="_blank"
            rel="noreferrer"
          >
            <FiFacebook style={{ marginLeft: 10, marginTop: 4 }} />
          </a>
        </p>
      </div>
      <Welcome message="My Games" />
      <div>
        <Projects
          projects={[
            {
              image: cyberPurr,
              description: 'me learning unity',
              images: [cyberPurr],
              techs: ['unity'],
              name: 'Cyber Purr',
              url: 'https://github.com/dunkbing/cyber-purr',
            },
            {
              image: bonkingBall,
              description: 'my first android game',
              images: [bonkingBall],
              techs: ['unity'],
              name: 'Bonking Ball',
              url: 'https://play.google.com/store/apps/details?id=com.dunkbing.JumpingBall',
            },
          ]}
        />
      </div>
      <Welcome message="Latest Notes" />
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
