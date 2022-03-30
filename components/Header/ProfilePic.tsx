import React from 'react';
import Image from 'next/image';
import { profilePic } from '@lib/images';

const ProfilePic: React.FC = () => {
  return (
    <div
      style={{
        width: '40%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      className="flex-auto"
    >
      <Image
        className="image rounded-full"
        width="100%"
        height="100%"
        src={profilePic}
        alt="profile_pic"
      />
    </div>
  );
};

export default ProfilePic;
