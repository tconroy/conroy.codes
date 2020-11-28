import React from 'react';

import { BlogGallery } from '../blog/BlogGallery';
import getAllPostPreviews from '../getAllPostPreviews';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { Config } from '../utils/Config';

const posts = getAllPostPreviews();

const Index = () => (
  <Main meta={<Meta title="Home" description={Config.description} />}>
    <div className="my-5 text-red-800">
      <p>
        <span role="img" aria-label="Warning icon">
          ⚠️
        </span>
        {' '}
        Note: this site is under active construction! Things will likely appear weird, broken, or
        change randomly.
        {' '}
        <span role="img" aria-label="Warning icon">
          ⚠️
        </span>
      </p>
    </div>

    <BlogGallery posts={posts} />
  </Main>
);

export default Index;
