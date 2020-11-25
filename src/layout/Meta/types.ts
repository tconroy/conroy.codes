export type MetaProps = {
  title: string;
  description: string;
  canonical?: string;
  post?: {
    image: string;
    date: string;
    modified_date: string;
    description: string;
    twitter_username?: string;
  };
};
