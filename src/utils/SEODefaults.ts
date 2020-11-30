import { DefaultSeoProps } from 'next-seo';

export const title: string = 'Tom Conroy';
const description: string = 'Helpful tips and tutorials for frontend developers. React, CSS, architecture and more!';
export const url: string = 'https://conroy.codes/';

const SEODefaults: DefaultSeoProps = {
  title,
  titleTemplate: `%s | ${title}`,
  description,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url,
    site_name: title,
    title,
    description,
    // images?: ReadonlyArray<OpenGraphImages>;
    defaultImageHeight: 63,
    defaultImageWidth: 1200,
    // article?: OpenGraphArticle;
  },
  twitter: {
    handle: '@T_Conroy',
    site: '@T_Conroy',
    cardType: 'summary_large_image',
  },
};

export default SEODefaults;
