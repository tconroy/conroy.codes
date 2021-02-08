const { createLoader } = require('simple-functional-loader');

function getLayout(src) {
  const layout = (src.match(/[\n\r].*layout:\s*([^\n\r]*)/) || [])[1] || 'Post';

  return layout.replace(/[^\w\s]/gi, '');
}

module.exports = function createPostLoader() {
  return createLoader(function loader(src) {
    const Layout = getLayout(src);

    const content = [
      `import ${Layout} from '~/components/${Layout}'`,
      'export { getStaticProps } from \'~/getStaticProps\'',
      src,
      `export default ${Layout}`,
    ].join('\n');

    if (content.includes('<!--more-->')) {
      return this.callback(null, content.split('<!--more-->').join('\n'));
    }

    return this.callback(null, content.replace(/<!--excerpt-->.*<!--\/excerpt-->/s, ''));
  });
};
