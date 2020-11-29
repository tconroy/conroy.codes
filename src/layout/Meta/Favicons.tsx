import React from 'react';

function faviconUrl(width?: number, height?: number): string {
  if (!width || !height) {
    return '/favicon.ico';
  }

  return `/favicon-${width}x${height}.png`;
}

export function Favicons() {
  return (
    <>
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" key="apple" />
      <link rel="icon" type="image/png" sizes="32x32" href={faviconUrl(16, 16)} key="icon32" />
      <link rel="icon" type="image/png" sizes="16x16" href={faviconUrl(16, 16)} key="icon16" />
      <link rel="icon" href={faviconUrl()} key="favicon" />
    </>
  );
}
