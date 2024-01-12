import Link from 'next/link';
import React from 'react';
import { FiTwitter, FiInstagram, FiGithub } from 'react-icons/fi';

const Social: React.FC = () => {
  return (
    <div className="font-mono flex flex-row items-center justify-center mb-1">
      Find me on
      <Link
        href="https://twitter.com/dunkbingg"
        target="_blank"
        aria-label="Twitter"
      >
        <FiTwitter size={24} style={{ marginLeft: 10, marginTop: 4 }} />
      </Link>
      <Link
        href="https://www.instagram.com/dunkbingg/"
        target="_blank"
        aria-label="Instagram"
      >
        <FiInstagram size={24} style={{ marginLeft: 10, marginTop: 4 }} />
      </Link>
      <Link
        href="https://github.com/dunkbing"
        target="_blank"
        aria-label="Github"
      >
        <FiGithub size={24} style={{ marginLeft: 10, marginTop: 4 }} />
      </Link>
      {/* <Link
        href="https://www.facebook.com/dunkbinggg/"
        target="_blank"
        aria-label="Facebook"
      >
        <FiFacebook size={24} style={{ marginLeft: 10, marginTop: 4 }} />
      </Link> */}
    </div>
  );
};

export default Social;
