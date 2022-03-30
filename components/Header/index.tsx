import React from 'react';
import { Welcome } from '..';
import ProfilePic from './ProfilePic';

const Header: React.FC = () => {
  return (
    <div className="flex flex-row">
      <ProfilePic />
      <Welcome />
    </div>
  );
};

export default Header;
