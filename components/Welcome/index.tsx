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
      <h1 className="title m-0.5">{message}</h1>
    </div>
  );
};

const Welcome: React.FC = () => {
  return (
    <div className="mx-3">
      <Title message="Hello" />
      <p>
        I am Bui Dang Binh, a software engineering student and games programming
        enthusiast.
      </p>
    </div>
  );
};

export default Welcome;
