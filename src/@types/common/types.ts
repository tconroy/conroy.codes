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
  link_text: string;
  title: string;
  published: boolean;
};

export type Post = {
  link: string;
  module: {
    meta: PostMeta;
    default: ComponentType;
  };
};
