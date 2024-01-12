import React from 'react';
import { Welcome } from '..';

const Header: React.FC = () => {
  return (
    <div className="flex flex-row justify-center">
      <Welcome />
    </div>
  );
};

export default Header;
