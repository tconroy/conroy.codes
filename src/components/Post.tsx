import React, { PropsWithChildren } from 'react';

import { MDXProvider } from '@mdx-js/react';
import tinytime from 'tinytime';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { Post as PostType } from '~/@types/common/types';
import MDXComponents from '~/components/MDX';

const postDateTemplate = tinytime('{dddd}, {MMMM} {DD}, {YYYY}');

type DisplayPostProps = PropsWithChildren<{
  meta: PostType['module']['meta'];
}>;

export default function Post({ meta, children }: DisplayPostProps) {
  return (
    <Main
      meta={(
        <Meta
          title={meta.title}
          description={meta.description}
          post={{
            date: meta.date,
            description: meta.description,
            image: meta.image,
            modified_date: meta.modified_date,
          }}
        />
      )}
    >
      <article className="article">
        <h1
          className={`
          text-center
          dark:text-white
          duration-150
          font-bold
          leading-snug
          mb-2
          text-5xl
          text-black
          transition-colors
        `}
        >
          {meta.title}
        </h1>
        <div
          className={`
          text-center
          text-sm
          mb-8
          text-black
          transition-colors
          dark:text-white
          duration-150
        `}
        >
          <time dateTime={meta.date}>{postDateTemplate.render(new Date(meta.date))}</time>
        </div>

        <MDXProvider components={MDXComponents}>{children}</MDXProvider>
      </article>

      <style jsx>
        {`
          :global(.article) {
            display: grid;
            grid-template-columns:
              1fr
              min(65ch, 100%)
              1fr;
          }

          :global(.article > *) {
            grid-column: 2;
          }

          :global(img.full-bleed) {
            grid-column: 1 / 4;
            width: 100%;
          }
        `}
      </style>
    </Main>
  );
}
