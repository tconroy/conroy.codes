const { createLoader } = require('simple-functional-loader');

module.exports = function createPostLoader() {
  return createLoader(function loader(src) {
    const content = [
      'import Post from "~/components/Post"',
      'export { getStaticProps } from "~/getStaticProps"',
      src,
      'export default Post',
    ].join('\n');

    if (content.includes('<!--more-->')) {
      return this.callback(null, content.split('<!--more-->').join('\n'));
    }

    return this.callback(null, content.replace(/<!--excerpt-->.*<!--\/excerpt-->/s, ''));
  });
};
