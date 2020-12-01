const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const createMDXLoader = require('./lib/mdx-loader');
const createMDXPreviewLoader = require('./lib/mdx-preview-loader');
const createPostLoader = require('./lib/post-loader');
const createRSSLoader = require('./lib/rss-loader');

module.exports = withBundleAnalyzer({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  experimental: {
    modern: true,
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(svg|png|jpe?g|gif|mp4)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    });

    const mdx = createMDXLoader(options);

    config.module.rules.push({
      test: /\.mdx$/,
      oneOf: [
        {
          resourceQuery: /preview/,
          use: [...mdx, createMDXPreviewLoader(options)],
        },
        {
          resourceQuery: /rss/,
          use: [...mdx, createRSSLoader()],
        },
        {
          use: [...mdx, createPostLoader()],
        },
      ],
    });

    // convert build scripts from TS -> JS for execution.
    if (!options.dev && options.isServer) {
      [
        {
          scriptName: 'build-rss',
          ext: 'tsx',
        },
        {
          scriptName: 'build-sitemap',
          ext: 'ts',
        },
      ].forEach(({ scriptName, ext }) => {
        const originalEntry = config.entry;

        config.entry = async () => {
          const entries = { ...(await originalEntry()) };
          entries[`./scripts/${scriptName}.js`] = `./scripts/${scriptName}.${ext}`;
          return entries;
        };
      });
    }

    return config;
  },
});
