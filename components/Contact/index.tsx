import React from 'react';
import Resume from './Resume';
import Social from './Social';
import TimeLine from './TimeLine';

const Contact: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        verticalAlign: 'center',
      }}
    >
      <TimeLine />
      <Resume />
      <Social />
    </div>
  );
};

export default Contact;
