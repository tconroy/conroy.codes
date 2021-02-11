import React from 'react';

import PlausibleProvider from 'next-plausible';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import App from 'next/app';

import ColorModeProvider from '~/providers/ColorMode/ColorModeProvider';
import SEO from '~/utils/SEODefaults';

import '../styles/main.css';
// import 'react-tippy/dist/tippy.css';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider attribute="class">
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <DefaultSeo {...SEO} />
        <PlausibleProvider domain="conroy.codes">
          <ColorModeProvider>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Component {...pageProps} />
          </ColorModeProvider>
        </PlausibleProvider>
      </ThemeProvider>
    );
  }
}
