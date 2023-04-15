import React from 'react';
import Image from 'next/legacy/image';
import { profilePic } from '@lib/images';

const ProfilePic: React.FC = () => {
  return (
    <div className="flex flex-col align-center justify-center md:w-1/5 w-2/5">
      <Image
        className="image rounded-full"
        src={profilePic}
        objectFit="fill"
        alt="profile_pic"
      />
    </div>
  );
};

export default ProfilePic;
