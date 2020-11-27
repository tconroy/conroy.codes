import React from 'react';

import Link from 'next/link';
import tinytime from 'tinytime';

import { Pagination, PaginationProps } from '../pagination/Pagination';
import { PostItems } from '../utils/Content';

const postDateTemplate = tinytime('{dddd}, {MMMM} {DD}, {YYYY}');

export type BlogGalleryProps = {
  posts: PostItems[];
  pagination: PaginationProps;
};

const BlogGallery = ({
  posts,
  pagination,
}: BlogGalleryProps) => (
  <>
    <ul>
      {posts.map(({ link, module }) => (
        <li key={link} className="mb-3 flex justify-between">
          <Link href={link}>
            <a>
              <h2>{module.meta.title}</h2>
            </a>
          </Link>

          <div>
            <time dateTime={module.meta.date}>
              {postDateTemplate.render(new Date(module.meta.date))}
            </time>
          </div>
        </li>
      ))}
    </ul>
  </>
);

export { BlogGallery };
