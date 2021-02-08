const rehypePrism = require('@mapbox/rehype-prism');
// eslint-disable-next-line import/no-extraneous-dependencies
const addClasses = require('rehype-add-classes');
const rehypeAutolinkHeadings = require('rehype-autolink-headings');
const rehypeSlug = require('rehype-slug');
// const rehypeToc = require('rehype-toc');
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
  paragraph: 'mb-4',
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
          // rehypeToc,
          [
            addClasses,
            {
              // add these classes to elements
              p: 'mb-7',
              h2: 'mt-10 mb-5 dark:text-white transition-colors duration-500',
              h3: 'mt-10 mb-5 dark:text-white transition-colors duration-500',
            },
          ],
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
