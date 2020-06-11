const packageJson = require('../package.json');

const removeTrailingSlash = (s) => s.replace(/\/$/, '');

// Environment variables
const appHost = process.env.APP_HOST || '0.0.0.0';
const appPort = Number.parseInt(process.env.APP_PORT, 10) || 3000;
const appPublicPath = process.env.APP_PUBLIC_PATH
  ? `${removeTrailingSlash(process.env.APP_PUBLIC_PATH)}/`
  : '/';

// Other
const lib = 'react-ui-icheck';

module.exports = {
  lib: {
    homepage: packageJson.homepage,
    name: lib,
    repository: `https://github.com/victorpopkov/${lib}`,
    version: packageJson.dependencies[lib].replace(/^\^/, ''),
  },
  appHost,
  appPort,
  appPublicPath,
};
