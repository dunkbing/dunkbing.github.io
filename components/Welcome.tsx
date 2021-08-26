import React from 'react';

const Welcome: React.FC<{ message: string }> = ({ message }) => {
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

export default Welcome;
