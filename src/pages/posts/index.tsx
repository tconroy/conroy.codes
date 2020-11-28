import React from 'react';

import getAllPostPreviews from '../../getAllPostPreviews';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';

const postPreviews = getAllPostPreviews();

const PostsIndex = () => (
  <Main meta={<Meta title="Posts Index" description="Posts Index" />}>
    <div>Post index</div>
    {postPreviews.map((preview) => (
      <h3 key={preview.link}>{preview.link}</h3>
    ))}
  </Main>
);

export default PostsIndex;
