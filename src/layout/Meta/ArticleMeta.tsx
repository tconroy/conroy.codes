import React from 'react';

type ArticleMetaProps = {
  publishedDate: string;
  modifiedDate: string;
};

export function ArticleMeta({ publishedDate, modifiedDate }: ArticleMetaProps) {
  return (
    <>
      {publishedDate && (
        <meta
          property="article:published_time"
          content={new Date(publishedDate).toISOString()}
          key="article:published_time"
        />
      )}
      {modifiedDate && (
        <meta
          property="article:modified_time"
          content={new Date(modifiedDate).toISOString()}
          key="article:modified_time"
        />
      )}
    </>
  );
}
