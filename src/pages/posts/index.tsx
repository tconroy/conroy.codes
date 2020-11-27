import React from 'react';

import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';

const PostsIndex = () => (
  <Main meta={(
    <Meta
      title="Posts Index"
      description="Posts Index"
    />
  )}
  >
    <div>Post index</div>
  </Main>
);

export default PostsIndex;
