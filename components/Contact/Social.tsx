import Link from 'next/link';
import React from 'react';
import { FiTwitter, FiInstagram, FiGithub, FiFacebook } from 'react-icons/fi';

const Social: React.FC = () => {
  return (
    <div className="flex flex-row items-center">
      <span>Find me on</span>
      <Link
        href="https://twitter.com/dunkbingg"
        target="_blank"
        rel="noreferrer"
        aria-label="Twitter"
      >
        <FiTwitter size={24} style={{ marginLeft: 10, marginTop: 4 }} />
      </Link>
      <Link
        href="https://www.instagram.com/dunkbingg/"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
      >
        <FiInstagram size={24} style={{ marginLeft: 10, marginTop: 4 }} />
      </Link>
      <Link
        href="https://github.com/dunkbing"
        target="_blank"
        rel="noreferrer"
        aria-label="Github"
      >
        <FiGithub size={24} style={{ marginLeft: 10, marginTop: 4 }} />
      </Link>
      <Link
        href="https://www.facebook.com/dunkbinggg/"
        target="_blank"
        rel="noreferrer"
        aria-label="Facebook"
      >
        <FiFacebook size={24} style={{ marginLeft: 10, marginTop: 4 }} />
      </Link>
    </div>
  );
};

export default Social;
