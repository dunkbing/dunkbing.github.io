import React from 'react';
import Social from './Social';
import TimeLine from './TimeLine';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <TimeLine />
      <Social />
    </div>
  );
};

export default Contact;
