import React from 'react';

export const Title: React.FC<{ message: string }> = ({ message }) => {
  return <h2 className="title">{message}</h2>;
};

const Welcome: React.FC = () => {
  return (
    <div className="w-full mb-3">
      <Title message="Hello" />
      <p className="font-semibold text-lg">
        I am Bing, a full-stack developer and games programming enthusiast. I
        like to work on side projects during my spare time to solve personal
        issues and (hopefully) help others.
      </p>
    </div>
  );
};

export default Welcome;
