import React from 'react';

import { render } from '@testing-library/react';

import { BlogGallery } from '../BlogGallery';

describe('BlogGallery', () => {
  it('should render the expected results', () => {
    expect(render(<BlogGallery posts={[]} />).container).toMatchSnapshot();
  });
});
