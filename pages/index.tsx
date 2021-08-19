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
        <div style={{
          width: "40%",
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }} className="flex-auto">
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
