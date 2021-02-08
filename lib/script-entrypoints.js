module.exports = function createScriptEntrypoints(config) {
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
    // eslint-disable-next-line no-param-reassign
    config.entry = async () => {
      const entries = { ...(await originalEntry()) };
      entries[`./scripts/${scriptName}.js`] = `./scripts/${scriptName}.${ext}`;
      return entries;
    };
  });

  return config.entry;
};
