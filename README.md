# conroy.codes 🚀
My personal homepage and blog.

## Built With
- [Next.js](https://nextjs.org)
- [TypeScript](https://www.typescriptlang.org) 
- [Tailwind CSS](https://tailwindcss.com)
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)
- [PostCSS](https://postcss.org)

### Features
- 🔥 Static site generation via [Next.js](https://nextjs.org)
- 🎈 Syntax Highlighting with Prism.js
- 🤖 [SEO metadata](https://github.com/garmeeh/next-seo) and [Open Graph](https://ogp.me/)
- ⚙️ [JSON-LD](https://developers.google.com/search/docs/guides/intro-structured-data) for richer indexing
- 📖 Pagination
- ⬇️ Markdown
- 💯 Max'd lighthouse score

### Requirements

- Node.js `v14.0.0+`, 
- npm

### Getting started

Run the following command on your local environment:

```shell
git clone
cd my-project-name
npm install
```

Then, you can run locally in development mode with live reload:

```shell
npm run dev
```

Open http://localhost:8080.

```shell
.
├── _posts            # blog post markdown
├── public            # Static files
│   ├── assets
│   │   └── images
│   │       └── posts # Images used in blog posts
└── src
    ├── pages         # Next.js pages
    ├── styles        # CSS files
    └── templates     # templates
```

### Customization

Change the following files:

Favicons (can be generated from https://favicon.io/favicon-converter/):
- `public/apple-touch-icon.png`, 
- `public/favicon.ico`,
- `public/favicon-16x16.png`
- `public/favicon-32x32.png`:

Logo:
- `public/assets/images/logo.png`
- `public/assets/images/logo-32x32.png`

- `src/styles/main.css`: your blog CSS file using Tailwind CSS
- `src/utils/Config.ts`: configuration file like blog name, url, etc.
- `src/templates/Main.tsx`: blog theme

### Deploy to production

You can see the results locally in production mode with:

```shell
$ npm run build
$ npm run start
```

The generated HTML and CSS files are minified, and unused CSS from [Tailwind CSS](https://tailwindcss.com) is removed.

You can create an optimized production build with:

```shell
npm run build-prod
```

All generated files are located at `dist` folder, which you can deploy with any hosting service.

### License

Licensed under the MIT License, Copyright © 2020

See [LICENSE](/LICENSE) for more information.

