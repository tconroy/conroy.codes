const { createLoader } = require('simple-functional-loader');

module.exports = function createRSSLoader() {
  return createLoader(function loader(src) {
    return this.callback(null, src);
  });
};
