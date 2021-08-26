import React from 'react';
import NextHead from 'next/head';
import { useRouter } from 'next/router';
import { MetaProps } from '../types/meta-props';

export let WEBSITE_HOST_URL = 'https://dunkbing.github.io';

const Head = ({ customMeta }: { customMeta?: MetaProps }): JSX.Element => {
  if (process.browser) {
    WEBSITE_HOST_URL = location.hostname;
  }
  const router = useRouter();
  const meta: MetaProps = {
    title: 'Bùi Đặng Bình',
    description: 'Student. Game Developer. Anime and Manga lover.',
    image: `${WEBSITE_HOST_URL}/images/site-preview.png`,
    type: 'article',
    ...customMeta,
  };

  return (
    <NextHead>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
      <meta charSet="utf-8" />
      <meta name="description" content={meta.description} />
      <meta
        name="google-site-verification"
        content="EvBTnaMX5a54coVLUMXi9_87myajTYR_KF5j8T_Ag-E"
      />
      <title>{meta.title}</title>
      {/*Tells Google not to provide a translation for this document*/}
      <meta name="google" content="notranslate" />
      <link rel="canonical" href={`${WEBSITE_HOST_URL}${router.asPath}`} />
      {/*Open Graph*/}
      <meta property="og:url" content={`${WEBSITE_HOST_URL}${router.asPath}`} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:image" content={meta.image} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:site_name" content="Bùi Đặng Bình - Game Developer" />
      <meta
        property="article:author"
        content="https://www.facebook.com/dunkbingg"
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@Bing_Dunk" />
      <meta name="twitter:creator" content="@Bing_Dunk" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      {meta.publishedTime && (
        <meta property="article:published_time" content={meta.publishedTime} />
      )}
      {meta.modifiedTime && (
        <meta property="article:modified_time" content={meta.modifiedTime} />
      )}
    </NextHead>
  );
};

export default Head;
