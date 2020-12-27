import React from 'react';

import getAllPostPreviews from '../../getAllPostPreviews';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import { Content } from '~/components/Content';

const postPreviews = getAllPostPreviews();

const PostsIndex = () => (
  <Main meta={(
    <Meta
      title="Posts Index"
      description="Posts Index"
    />
  )}
  >
    <Content>
      <div>Post index</div>
      {postPreviews.map((preview) => (
        <h3 key={preview.link}>{preview.link}</h3>
      ))}
    </Content>
  </Main>
);

export default PostsIndex;
