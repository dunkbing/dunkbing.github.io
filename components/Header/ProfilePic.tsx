import React from 'react';
import Image from 'next/legacy/image';
import { profilePic } from '@lib/images';

const ProfilePic: React.FC = () => {
  return (
    <div className="flex flex-col align-center justify-center w-2/5">
      <Image
        className="image rounded-full w-1/2"
        src={profilePic}
        objectFit="fill"
        alt="profile_pic"
      />
    </div>
  );
};

export default ProfilePic;
