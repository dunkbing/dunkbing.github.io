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
import { helloIcon } from '../lib/icon';

type IndexProps = {
  posts: PostType[];
};

export const Index = ({ posts }: IndexProps): JSX.Element => {
  return (
    <Layout favIcon={helloIcon}>
      <div className="flex flex-row">
        <Image
          className="image rounded-full"
          width="80px"
          height="60px"
          src={profilePic}
          alt="profile_pic"
        />
        <div style={{ marginLeft: '10px' }}>
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
        <p>See my full Resume</p>
        <p>Find me on Twitter</p>
      </div>
      <Welcome message="Latest Notes" />
      <div className="my-0.5">
        {posts.map((post) => (
          <PostCard
            key={post.slug}
            slug={post.slug}
            title={post.title}
            date={post.date}
            description={post.description}
            image={post.image}
          />
        ))}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts(['date', 'description', 'slug', 'title']);

  return {
    props: { posts },
  };
};

export default Index;
