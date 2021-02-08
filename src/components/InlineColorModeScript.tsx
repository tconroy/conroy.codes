import React from 'react';

const InlineScript = ({ children }: any) => (
  <script dangerouslySetInnerHTML={{ __html: `(${children.toString()})();` }} /> // eslint-disable-line
);

function setInitialColorMode() {
  if (['dark', 'light'].includes(localStorage?.getItem('theme') || '')) {
    return;
  }

  localStorage.setItem(
    'theme',
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
  );
}

export default function InlineColorModeScript() {
  return <InlineScript>{setInitialColorMode}</InlineScript>;
}
