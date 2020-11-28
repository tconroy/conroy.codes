// import { format } from 'path';
import React, { PropsWithChildren } from 'react';

import { Post } from '@/@types/common/types';
import tinytime from 'tinytime';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const postDateTemplate = tinytime('{dddd}, {MMMM} {DD}, {YYYY}');

type DisplayPostProps = PropsWithChildren<{
  meta: Post['module']['meta'];
}>;

export default function DisplayPost({ meta, children }: DisplayPostProps) {
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
      <h1 className="text-center font-bold text-3xl text-gray-900">{meta.title}</h1>
      <div className="text-center text-sm mb-8">
        <time dateTime={meta.date}>{postDateTemplate.render(new Date(meta.date))}</time>
      </div>

      <Content>{children}</Content>
    </Main>
  );
}