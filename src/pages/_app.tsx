import React from 'react';

import PlausibleProvider from 'next-plausible';
import { DefaultSeo } from 'next-seo';
import App from 'next/app';

import SEO from '../utils/SEODefaults';

import '../styles/main.css';
import '../styles/prism-a11y-dark.css';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <DefaultSeo {...SEO} />
        <PlausibleProvider domain="conroy.codes">
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
        </PlausibleProvider>
      </>
    );
  }
}
