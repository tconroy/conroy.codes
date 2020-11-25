import React from 'react';

import Link from 'next/link';

import { convertUrlToLinkHref } from '../utils/Pagination';

export type PaginationProps = {
  previous?: string;
  next?: string;
};

const Pagination = (props: PaginationProps) => (
  <div className="text-sm flex justify-between">
    {props.previous && (
      <div>
        <Link href={convertUrlToLinkHref(props.previous)} as={props.previous}>
          <a>← Newer Posts</a>
        </Link>
      </div>
    )}

    {props.next && (
      <div className="text-right ml-auto">
        <Link href={convertUrlToLinkHref(props.next)} as={props.next}>
          <a>Older Posts →</a>
        </Link>
      </div>
    )}
  </div>
);

export { Pagination };
