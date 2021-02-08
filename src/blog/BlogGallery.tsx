import React from 'react';

import Link from 'next/link';

import { Post, PostMeta } from '~/@types/common/types';
import ChevronDoubleRight from '~/components/icons/ChevronDoubleRight';

export type BlogGalleryProps = {
  posts: Array<Post>;
};

interface PostItemProps {
  link: string;
  meta: PostMeta;
  PreviewTextComponent: React.ComponentType;
}

function PostItem({ link, meta, PreviewTextComponent }: PostItemProps) {
  return (
    <article>
      <Link href={link}>
        <a className="group">
          <header className="mb-3">
            <h3
              className={`
              inline
              dark:text-white
              duration-500
              font-semibold
              text-gray-800
            `}
            >
              {meta.title}
            </h3>
          </header>
          <section className="mb-3">
            <PreviewTextComponent />
          </section>
          <footer>
            <Link href={link}>
              <small
                className={`
                link
                dark:text-darkmode-white
                duration-500
                transition-color
              `}
              >
                <strong>
                  Click to read more
                  {' '}
                  {meta.link_text}
                  <ChevronDoubleRight
                    className={`
                    w-3
                    inline-block
                    align-middle ml-2
                  `}
                  />
                </strong>
              </small>
            </Link>
          </footer>
        </a>
      </Link>
    </article>
  );
}

const BlogGallery = ({ posts }: BlogGalleryProps) => (
  <>
    <ul>
      {posts.map(({ link, module: { meta, default: PreviewTextComponent } }) => (
        <li key={link}>
          <PostItem link={link} meta={meta} PreviewTextComponent={PreviewTextComponent} />
        </li>
      ))}
    </ul>
  </>
);

export { BlogGallery };
