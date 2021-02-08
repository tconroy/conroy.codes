import React, { JSXElementConstructor, PropsWithChildren } from 'react';

type TextProps = PropsWithChildren<{
  as?: string;
  className?: string;
}>;

export default function Text({ as = 'p', className = '', children }: TextProps) {
  const Node = (as as unknown) as JSXElementConstructor<
  PropsWithChildren<{
    className: string;
  }>
  >;

  return <Node className={` ${className}`}>{children}</Node>;
}
