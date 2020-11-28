import { ComponentType } from 'react';

export type Author = {
  fullName: string;
  firstName: string;
  twitter: string;
  email: string;
};

export type PostMeta = {
  authors: [Author];
  date: string;
  description: string;
  discussion: string;
  image: string;
  modified_date: string;
  title: string;
};

export type Post = {
  link: string;
  module: {
    meta: PostMeta;
    default: ComponentType;
  };
};
