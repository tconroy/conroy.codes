import React from 'react';

import { setInitialColorMode, getInitialColorMode } from '~/providers/ColorMode/InitialColorMode';

const functionString = String(setInitialColorMode).replace(
  'getInitialColorMode',
  String(getInitialColorMode),
);

export default function InlineColorModeScript() {
  return (
    // eslint-disable-next-line react/no-danger
    <script
      dangerouslySetInnerHTML={{
        __html: `(${functionString})()`,
      }}
    />
  );
}
