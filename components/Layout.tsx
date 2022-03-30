import React, { useEffect } from 'react';
import { MetaProps } from '../types/meta-props';
import Head from './Head';
import Navigation from './Navigation';
import ThemeSwitch from './ThemeSwitch';

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
  favIcon?: string;
};

const Layout = ({
  children,
  customMeta,
  favIcon,
}: LayoutProps): JSX.Element => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const fav = document.getElementById('favicon') as HTMLLinkElement;
      if (fav) {
        fav.href = favIcon;
      }
    }
  }, []);

  return (
    <>
      <Head customMeta={customMeta} />
      <header className="sticky top-0 z-50">
        <div className="max-w-4xl px-8 mx-auto header">
          <div className="flex items-center justify-between py-4">
            {/* <Navigation /> */}
            <ThemeSwitch />
          </div>
        </div>
      </header>
      <main>
        <div className="max-w-4xl px-8 py-4 mx-auto">{children}</div>
      </main>
      <footer className="py-8">
        <div className="max-w-4xl px-8 mx-auto">
          Built by{' '}
          <a
            className="text-gray-900 dark:text-white"
            href="https://github.com/dunkbing"
            target="_blank"
            rel="noreferrer"
          >
            Bui Dang Binh
          </a>
        </div>
      </footer>
    </>
  );
};

export default Layout;
