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
    <div className="mx-3 w-3/5">
      <Title message="Hello" />
      <p>
        I am Bui Dang Binh, a full-stack developer and games programming
        enthusiast.
      </p>
    </div>
  );
};

export default Welcome;
