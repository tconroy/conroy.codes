import React from 'react';

import { Post } from '@/@types/common/types';
import Link from 'next/link';
import tinytime from 'tinytime';

const postDateTemplate = tinytime('{dddd}, {MMMM} {DD}, {YYYY}');

export type BlogGalleryProps = {
  posts: Array<Post>;
};

const BlogGallery = ({ posts }: BlogGalleryProps) => (
  <>
    <ul>
      {posts.map(({ link, module: { meta, default: PreviewTextComponent } }) => (
        <li key={link} className="mb-3 flex justify-between">
          <Link href={link}>
            <a>
              <h2>{meta.title}</h2>
            </a>
          </Link>

          <div>
            <time dateTime={meta.date}>{postDateTemplate.render(new Date(meta.date))}</time>
          </div>

          <PreviewTextComponent />
        </li>
      ))}
    </ul>
  </>
);

export { BlogGallery };
