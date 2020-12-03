/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactNode } from 'react';

import { MDXProvider } from '@mdx-js/react';

import MDXComponents from '~/components/MDX';

type ContentProps = {
  children: ReactNode;
};

const Content = ({ children }: ContentProps) => (
  <section className="max-w-screen-xl m-auto">
    <MDXProvider components={MDXComponents}>{children}</MDXProvider>
  </section>
);

export { Content };
