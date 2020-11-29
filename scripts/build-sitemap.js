/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs');

const globby = require('globby');
const prettier = require('prettier');

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

      const route = path.includes('/index') ? path.replace('/index', '') : path;

      return `
        <url>
            <loc>${`https://conroy.codes${route}`}</loc>
        </url>
      `;
    })
    .join('')}
        </urlset>
    `;

  // If you're not using Prettier, you can remove this.
  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  });

  fs.writeFileSync('public/sitemap.xml', formatted);
})();
