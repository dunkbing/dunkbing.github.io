import React from 'react';
import { Social } from '..';

export const Title: React.FC<{ message: string }> = ({ message }) => {
  return <h2 className="font-mono title text-yellow-500"># {message}</h2>;
};

const Welcome: React.FC = () => {
  return (
    <div className="w-full">
      <Title message="Hello" />
      <p className="font-mono text-lg mb-0">
        I am Bing, a full-stack developer and tech enthusiast. I like to work on
        side projects during my spare time to solve personal issues and
        (hopefully) help others.
      </p>
      <Social />
    </div>
  );
};

export default Welcome;
