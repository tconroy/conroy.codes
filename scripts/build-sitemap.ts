/* eslint-disable import/no-extraneous-dependencies */
import fs from 'fs';

import globby from 'globby';
import prettier from 'prettier';

import SEODefaults from '~/utils/SEODefaults';

(async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc');

  // Ignore Next.js specific files (e.g., _app.tsx), API routes, and post components.
  const pages = await globby([
    'src/pages/**/*{.tsx,.mdx}',
    '!src/pages/**/_*.tsx',
    '!src/pages/api',
  ]);

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
    .map((page) => {
      const path = page.replace('src/pages', '').replace('.tsx', '').replace('.mdx', '');

      const route = (path.includes('/index') ? path.replace('/index', '') : path).replace(
        /^\/+/,
        '',
      ); // remove leading slash

      return `
        <url>
            <loc>${`${SEODefaults!.openGraph!.url}${route}`}</loc>
        </url>
      `;
    })
    .join('')}
        </urlset>
    `;

  fs.writeFileSync(
    './public/sitemap.xml',
    prettier.format(sitemap, {
      ...prettierConfig,
      parser: 'html',
    }),
  );
})();
