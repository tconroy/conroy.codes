const { createLoader } = require('simple-functional-loader');

module.exports = function createMDXPreviewLoader() {
  return createLoader(function loader(src) {
    if (src.includes('<!--more-->')) {
      const [preview] = src.split('<!--more-->');
      return this.callback(null, preview);
    }

    const [preview] = src.split('<!--/excerpt-->');
    return this.callback(null, preview.replace('<!--excerpt-->', ''));
  });
};
