import React from 'react';

import { Content } from '../components/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main meta={<Meta title="About" description="About" />}>
    <Content>
      <div className="inner-container m-auto">
        <h1>
          Hey there!
          {' '}
          <span role="img" aria-label="a waving hand">
            👋
          </span>
          {' '}
          My name is Tom. Nice to meet you!
        </h1>
        <br />
        <p>
          I am a Senior Software Engineer based out of beautiful New York City.
          {' '}
          <span role="img" aria-label="the Statue of Liberty">
            🗽
          </span>
        </p>
        <br />
        <p>
          Currently, most of my focus is spent creating fun, beautiful and scalable frontend
          interfaces for web and mobile apps.
        </p>
        <p>
          I love to work in JavaScript (specifically TypeScript these days!) and CSS is the bees
          knees
          {' '}
          <span role="img" aria-label="a bumble bee">
            🐝
          </span>
        </p>
        <br />
        <p>
          Currently I work full-time at
          {' '}
          <a href="https://www.squarespace.com">Squarespace</a>
          ,
          helping to empower creatives to share their voice and grow their online presence.
        </p>
      </div>
    </Content>
    <style jsx>
      {`
        .inner-container {
          max-width: 65ch;
        }
      `}
    </style>
  </Main>
);

export default About;
