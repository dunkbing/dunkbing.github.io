import Link from 'next/link';
import React from 'react';
import { FiTwitter, FiInstagram, FiFacebook, FiGithub } from 'react-icons/fi';

const Social: React.FC = () => {
  return (
    <div className="font-mono flex flex-row space-x-2 items-center justify-center my-2">
      <span>Find me on</span>
      <Link
        href="https://twitter.com/dunkbingg"
        target="_blank"
        aria-label="Twitter"
      >
        <FiTwitter size={24} />
      </Link>
      <Link
        href="https://www.facebook.com/bingdevtrai/"
        target="_blank"
        aria-label="Facebook"
      >
        <FiFacebook size={24} />
      </Link>
      <Link
        href="https://www.instagram.com/dunkbingg/"
        target="_blank"
        aria-label="Instagram"
      >
        <FiInstagram size={24} />
      </Link>
      <Link
        href="https://github.com/dunkbing"
        target="_blank"
        aria-label="Github"
      >
        <FiGithub size={24} />
      </Link>
    </div>
  );
};

export default Social;
