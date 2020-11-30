/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactNode } from 'react';

import { MDXProvider } from '@mdx-js/react';
import Image from 'next/image';

export const mdxComponents = {
  pre: ({ className, ...props }: { className: string }) => (
    <pre className={`${className} rounded-md bg-gray-800 py-3 px-4 overflow-x-auto`} {...props} />
  ),
  'pre.code': ({ className, ...props }: { className: string }) => (
    <code className={`${className} text-gray-200`} {...props} />
  ),
  Image,
};

type ContentProps = {
  children: ReactNode;
};

const Content = ({ children }: ContentProps) => (
  <div className="content">
    <MDXProvider components={mdxComponents}>{children}</MDXProvider>
  </div>
);

export { Content };
