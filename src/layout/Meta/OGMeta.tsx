import React from 'react';

import { Config } from '../../utils/Config';

type OGMetaProps = {
  title?: string;
  description?: string;
};

export function OGMeta({
  title = Config.site_name,
  description = Config.description,
}: OGMetaProps) {
  return (
    <>
      <meta property="og:title" content={`${title} | ${Config.site_name}`} key="og:title" />
      <meta property="og:description" content={description} key="og:description" />
      <meta property="og:locale" content={Config.locale} key="og:locale" />
      <meta property="og:site_name" content={Config.site_name} key="og:site_name" />
    </>
  );
}
