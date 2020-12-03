const rehypePrism = require('@mapbox/rehype-prism');
const rehypeAutolinkHeadings = require('rehype-autolink-headings');
const rehypeSlug = require('rehype-slug');
const rehypeToc = require('rehype-toc');
const visit = require('unist-util-visit');

const tokenClassNames = {
  tag: 'text-code-red',
  'attr-name': 'text-code-yellow',
  'attr-value': 'text-code-green',
  deleted: 'text-code-red',
  inserted: 'text-code-green',
  punctuation: 'text-code-white',
  keyword: 'text-code-purple',
  string: 'text-code-green',
  function: 'text-code-blue',
  boolean: 'text-code-red',
  comment: 'text-gray-400 italic',
};

module.exports = function createMDXLoader(options) {
  return [
    options.defaultLoaders.babel,
    {
      loader: '@mdx-js/loader',
      options: {
        rehypePlugins: [
          rehypePrism,
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: 'wrap',
            },
          ],
          rehypeToc,
          () => (tree) => {
            visit(tree, 'element', (node) => {
              const [token, type] = node.properties.className || [];
              if (token === 'token') {
                // eslint-disable-next-line no-param-reassign
                node.properties.className = [tokenClassNames[type]];
              }
            });
          },
        ],
      },
    },
  ];
};
