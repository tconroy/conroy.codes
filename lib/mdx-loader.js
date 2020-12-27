const rehypePrism = require('@mapbox/rehype-prism');
const rehypeAutolinkHeadings = require('rehype-autolink-headings');
const rehypeSlug = require('rehype-slug');
const rehypeToc = require('rehype-toc');
const visit = require('unist-util-visit');

const sharedClassNames = 'transition-colors duration-500';

function withCodeClassNames(colorName) {
  return [
    `text-code-lightmode-${colorName}`,
    `dark:text-code-darkmode-${colorName}`,
    `${sharedClassNames}`,
  ].join(' ');
}

const tokenClassNames = {
  tag: withCodeClassNames('red'),
  'attr-name': withCodeClassNames('yellow'),
  'attr-value': withCodeClassNames('green'),
  deleted: withCodeClassNames('red'),
  inserted: withCodeClassNames('green'),
  punctuation: withCodeClassNames('white'),
  keyword: withCodeClassNames('purple'),
  string: withCodeClassNames('green'),
  function: withCodeClassNames('blue'),
  boolean: withCodeClassNames('red'),
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
