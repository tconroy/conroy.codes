import React from 'react';

import Link from 'next/link';

import getAllPostPreviews from '../../getAllPostPreviews';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import { Content } from '~/components/Content';
import Components from '~/components/MDX/Type';

const postPreviews = getAllPostPreviews();

const PostsIndex = () => (
  <Main meta={<Meta title="Posts" description="Posts" />}>
    <Content>
      <Components.H1>Posts</Components.H1>
      <ol
        style={{
          listStyleType: 'decimal-leading-zero',
          marginLeft: '2.25rem',
        }}
      >
        {postPreviews.length > 0
          && postPreviews.map((preview) => (
            <li>
              <h3>
                <Link href={preview.link}>{preview.module.meta.title}</Link>
              </h3>
            </li>
          ))}
        {postPreviews.length === 0 && (
          <Components.H3>No published posts yet. Check back soon!</Components.H3>
        )}
      </ol>
    </Content>
  </Main>
);

export default PostsIndex;
