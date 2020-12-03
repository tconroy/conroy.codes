import React from 'react';

import Document, {
  Html, Head, Main, NextScript, DocumentContext,
} from 'next/document';

import InlineColorModeScript from '~/providers/ColorMode/InlineColorModeScript';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <InlineColorModeScript />
          <link rel="alternate" type="application/rss+xml" title="RSS 2.0" href="/feed.xml" />
          <link rel="alternate" type="application/atom+xml" title="Atom 1.0" href="/atom.xml" />
          <link rel="alternate" type="application/json" title="JSON Feed" href="/feed.xml" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style jsx global>
          {`
            #__next {
              @apply flex-1;
            }
          `}
        </style>
      </Html>
    );
  }
}

export default MyDocument;
