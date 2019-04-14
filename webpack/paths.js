const path = require('path');

const root = path.resolve(__dirname, '../');
const config = path.resolve(root, 'config/');
const dist = path.resolve(root, 'dist/');
const src = path.resolve(root, 'src/');

module.exports = {
  config,
  dist,
  root,
  src,
};
