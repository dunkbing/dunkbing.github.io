import React from 'react';
import { Gap, Welcome } from '..';
import ProfilePic from './ProfilePic';

const Header: React.FC = () => {
  return (
    <div className="flex flex-row justify-center">
      {/* <ProfilePic />
      <Gap.S /> */}
      <Welcome />
    </div>
  );
};

export default Header;
