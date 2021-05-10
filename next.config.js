const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const createMDXLoader = require('./lib/mdx-loader');
const createMDXPreviewLoader = require('./lib/mdx-preview-loader');
const createPostLoader = require('./lib/post-loader');
const createRSSLoader = require('./lib/rss-loader');
const createScriptEntrypoints = require('./lib/script-entrypoints');

module.exports = withBundleAnalyzer({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  experimental: {
    modern: true,
  },
  cssModules: true,
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

    if (!options.dev && options.isServer) {
      config.entry = createScriptEntrypoints(config);
    }

    return config;
  },
});
