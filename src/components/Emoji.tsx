import React, { PropsWithChildren } from 'react';

export default function Emoji({
  children,
  label,
}: PropsWithChildren<{
  label: string;
}>) {
  return (<span role="img" aria-label={label}>{children}</span>);
}
