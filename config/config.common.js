const packageJson = require('../package.json');

// Helpers
const removeTrailingSlash = (s) => s.replace(/\/$/, '');

// Other
const lib = 'react-ui-icheck';

module.exports = {
  app: {
    host: process.env.APP_HOST || '0.0.0.0',
    name: process.env.APP_NAME || packageJson.name,
    port: Number.parseInt(process.env.APP_PORT, 10) || 3000,
    publicPath: process.env.APP_PUBLIC_PATH
      ? `${removeTrailingSlash(process.env.APP_PUBLIC_PATH)}/`
      : '/',
    revision: process.env.APP_REVISION,
    version: process.env.APP_VERSION || packageJson.version,
  },
  lib: {
    homepage: packageJson.homepage,
    name: lib,
    repository: `https://github.com/victorpopkov/${lib}`,
    revision: process.env.LIB_REVISION,
    version: packageJson.dependencies[lib].replace(/^\^/, ''),
  },
};
