import React from 'react';

import Link from 'next/link';

import ChevronDoubleRight from './icons/ChevronDoubleRight';

type ChevronLinkProps = React.PropsWithChildren<{
  className?: string;
  chevronClassName?: string;
  href: string;
}>;

export default function ChevronLink({
  className = '',
  chevronClassName = 'w-4 inline-block',
  children,
  href,
}: ChevronLinkProps) {
  return (
    <Link href={href}>
      <a
        className={`
        ${className}
        link
        dark:text-darkmode-white
      `}
      >
        {children}
        {' '}
        <ChevronDoubleRight className={`${chevronClassName} inline-block`} />
      </a>
    </Link>
  );
}
