import React from 'react';

export const Title: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        verticalAlign: 'center',
      }}
    >
      <h2 className="title m-0.5">{message}</h2>
    </div>
  );
};

const Welcome: React.FC = () => {
  return (
    <div className="w-full">
      <Title message="Hello" />
      <p>
        I am Bing, a full-stack developer and games programming enthusiast. I
        like to work on side projects during my spare time to solve personal
        issues and (hopefully) help others.
      </p>
    </div>
  );
};

export default Welcome;
