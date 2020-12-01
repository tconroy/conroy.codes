/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactNode } from 'react';

import { MDXProvider } from '@mdx-js/react';

import MDXComponents from '~/components/MDX';

type ContentProps = {
  children: ReactNode;
};

const Content = ({ children }: ContentProps) => (
  <div className="content">
    <MDXProvider components={MDXComponents}>{children}</MDXProvider>
  </div>
);

export { Content };
