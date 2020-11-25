import React from 'react';

function faviconUrl(width?: number, height?: number): string {
  if (!width || !height) {
    return `${process.env.baseUrl}/favicon.ico`;
  }

  return `${process.env.baseUrl}/favicon-${width}x${height}.png`;
}

export function Favicons() {
  return (
    <>
      <link
        rel="apple-touch-icon"
        href={`${process.env.baseUrl}/apple-touch-icon.png`}
        key="apple"
      />
      <link rel="icon" type="image/png" sizes="32x32" href={faviconUrl(16, 16)} key="icon32" />
      <link rel="icon" type="image/png" sizes="16x16" href={faviconUrl(16, 16)} key="icon16" />
      <link rel="icon" href={faviconUrl()} key="favicon" />
    </>
  );
}
