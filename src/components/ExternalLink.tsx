import React, { PropsWithChildren } from 'react';

type ExternalLinkProps = PropsWithChildren<{
  href: string;
}> &
JSX.IntrinsicElements['a'];

export default function ExternalLink({ href, children, ...attrs }: ExternalLinkProps) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <a href={href} target="_blank" rel="noreferrer" {...attrs}>
      {children}
    </a>
  );
}
