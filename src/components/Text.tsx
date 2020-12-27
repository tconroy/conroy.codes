import React, { PropsWithChildren } from 'react';

type TextProps = PropsWithChildren<{
  as?: string;
  className?: string;
}>;

export default function Text({
  as = 'p',
  className = '',
  children,
}: TextProps) {
  const Node = as;

  return (
    <Node className={` ${className}`}>
      {children}
    </Node>
  );
}
