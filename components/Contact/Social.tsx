import React from 'react';
import { FiTwitter, FiInstagram, FiGithub, FiFacebook } from 'react-icons/fi';

const Social: React.FC = () => {
  return (
    <p style={{ display: 'flex', flexDirection: 'row' }}>
      Find me on{' '}
      <a href="https://twitter.com/dunkbingg" target="_blank" rel="noreferrer">
        <FiTwitter style={{ marginLeft: 10, marginTop: 4 }} />
      </a>
      <a
        href="https://www.instagram.com/dunkbingg/"
        target="_blank"
        rel="noreferrer"
      >
        <FiInstagram style={{ marginLeft: 10, marginTop: 4 }} />
      </a>
      <a href="https://github.com/dunkbing" target="_blank" rel="noreferrer">
        <FiGithub style={{ marginLeft: 10, marginTop: 4 }} />
      </a>
      <a
        href="https://www.facebook.com/dunkbinggg/"
        target="_blank"
        rel="noreferrer"
      >
        <FiFacebook style={{ marginLeft: 10, marginTop: 4 }} />
      </a>
    </p>
  );
};

export default Social;
