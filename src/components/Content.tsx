/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactNode } from 'react';

import { MDXProvider } from '@mdx-js/react';

import MDXComponents from '~/components/MDX';

type ContentProps = {
  children: ReactNode;
  className?: string;
};

const Content = ({ children, className }: ContentProps) => (
  <section className={`max-w-screen-md m-auto px-8 pt-12 lg:pt-16 ${className}`}>
    <MDXProvider components={MDXComponents}>{children}</MDXProvider>
  </section>
);

export { Content };
