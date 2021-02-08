import React from 'react';

import Link from 'next/link';

import getAllPostPreviews from '../../getAllPostPreviews';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import { Content } from '~/components/Content';
import { Components } from '~/pages/index';

const postPreviews = getAllPostPreviews();

const PostsIndex = () => (
  <Main meta={<Meta title="Posts Index" description="Posts Index" />}>
    <Content>
      <Components.H1>Posts</Components.H1>
      <ol
        style={{
          listStyleType: 'decimal-leading-zero',
          marginLeft: '2.25rem',
        }}
      >
        {postPreviews.map((preview) => (
          <li>
            <h3>
              <Link href={preview.link}>{preview.module.meta.title}</Link>
            </h3>
          </li>
        ))}
      </ol>
    </Content>
  </Main>
);

export default PostsIndex;
