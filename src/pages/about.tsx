import React from 'react';

import { Content } from '../components/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main meta={<Meta title="About" description="About" />}>
    <Content>
      <p>Tom Conroy is a Software Engineer located in New York City.</p>
      <p>
        He primarily works with JavaScript (TypeScript in particular) on frontend projects, as well
        as on the backend with NodeJS.
      </p>
      <p>
        He currently is employed full time as a Software Engineer at
        {' '}
        <a href="https://www.squarespace.com">Squarespace</a>
        , helping to empower creatives to share
        their voice and grow their online presence.
      </p>
    </Content>
  </Main>
);

export default About;
