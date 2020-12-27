import React from 'react';

import { Content } from '../components/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import ExternalLink from '~/components/ExternalLink';

export default function About() {
  return (
    <Main meta={(
      <Meta
        title="About"
        description="About"
      />
    )}
    >
      <Content>
        <div className="inner-container m-auto">
          <p>What do people even say in these sorts of things? I don&apos;t know.</p>
          <p>
            Currently I live in the lovely New York City area, working as a
            Software Engineer at
            {' '}
            <ExternalLink href="https://www.squarespace.com">Squarespace</ExternalLink>
            {', '}
            where I develop digital tools that empower creatives
            to build amazing things.
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
}
