/* eslint-disable react/jsx-props-no-spreading */
import React, { PropsWithChildren } from 'react';

type PProps = PropsWithChildren<{
  className?: string;
}>;

export default function P({ className, ...props }: PProps) {
  return (
    <p className={className} {...props} />
  );
}
