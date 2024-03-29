import Link from 'next/link';
import React from 'react';

const Navigation = (): JSX.Element => {
  return (
    <nav className="font-bold text-xl font-mono text-gray-200 py-2">
      <Link href="/" className="mr-5">
        Home
      </Link>
      <Link href="/notes" className="px-6">
        Notes
      </Link>
      <Link href="/golang" className="px-6">
        Golang
      </Link>
    </nav>
  );
};

export default Navigation;
