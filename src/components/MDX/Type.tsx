import React, { PropsWithChildren } from 'react';

import MDXComponents from '~/components/MDX';

const Components = {
  H1: (props: PropsWithChildren<{}>) => (
    <h1
      className={`
      dark:text-white
      duration-150
      font-bold
      leading-snug
      mb-5
      text-5xl
      text-black
      transition-colors
    `}
    >
      {props.children}
    </h1>
  ),
  H2: (
    props: PropsWithChildren<{
      className?: string;
    }>,
  ) => (
    <h2
      className={`
      ${props.className}
      dark:text-white
      duration-150
      font-bold
      leading-snug
      text-4xl
      text-black
      transition-colors
    `}
    >
      {props.children}
    </h2>
  ),
  H3: (
    props: PropsWithChildren<{
      className?: string;
    }>,
  ) => (
    <h3
      className={`
      ${props.className}
      dark:text-white
      duration-150
      font-bold
      leading-snug
      text-2xl
      text-black
      transition-colors
    `}
    >
      {props.children}
    </h3>
  ),
  P: (props: PropsWithChildren<{}>) => (
    <MDXComponents.P
      className={`
      leading-relaxed
      mb-6
      text-xl
    `}
    >
      {props.children}
    </MDXComponents.P>
  ),
};

export default Components;
