import { format, parseISO } from 'date-fns';
import fs from 'fs';
import matter from 'gray-matter';
import mdxPrism from 'mdx-prism';
import { GetStaticPaths, GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import path from 'path';
import React from 'react';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import rehypeRaw from 'rehype-raw';
import { nodeTypes } from '@mdx-js/mdx';
import Layout from '../../components/Layout';
import { MetaProps } from '../../types/meta-props';
import { PostType } from '../../types/post';
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils';
import { noteIcon } from '../../lib/icon';
import { WEBSITE_HOST_URL } from '../../components/Head';

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  Head,
  Image,
  Link,
};

type PostPageProps = {
  source: MDXRemoteSerializeResult;
  frontMatter: PostType;
};

const PostPage = ({ source, frontMatter }: PostPageProps): JSX.Element => {
  const customMeta: MetaProps = {
    title: `${frontMatter.title}`,
    description: frontMatter.description,
    image: `${WEBSITE_HOST_URL}${frontMatter.image}`,
    publishedTime: frontMatter.publishedTime,
    modifiedTime: frontMatter.modifiedTime,
    type: 'article',
  };

  return (
    <Layout customMeta={customMeta} favIcon={noteIcon}>
      <article
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1 className="mb-3 text-gray-900 dark:text-white">
          {frontMatter.title}
        </h1>
        <p className="mb-10 text-sm text-gray-500 dark:text-gray-400">
          Last updated:{' '}
          {format(parseISO(frontMatter.publishedTime), 'MMMM dd, yyyy')}
        </p>
        <div className="prose dark:prose-dark" style={{ maxWidth: '80%' }}>
          <MDXRemote {...source} components={components} />
        </div>
      </article>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  try {
    const mdxSource = await serialize(content, {
      // Optionally pass remark/rehype plugins
      mdxOptions: {
        remarkPlugins: [require('remark-code-titles')],
        rehypePlugins: [
          mdxPrism,
          rehypeSlug,
          [rehypeRaw, { passThrough: nodeTypes }],
          rehypeAutolinkHeadings,
        ],
      },
      scope: data,
    });
    return {
      props: {
        source: mdxSource,
        frontMatter: data,
      },
    };
  } catch (error) {
    return {
      props: {
        source: null,
        frontMatter: data,
      },
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map(path => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map(slug => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default PostPage;
