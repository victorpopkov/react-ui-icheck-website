const path = require('path');

const root = path.resolve(__dirname, '../');
const src = path.resolve(root, 'src/');
const assets = path.resolve(src, 'assets/');

module.exports = {
  config: path.resolve(root, 'config/'),
  dist: path.resolve(root, 'dist/'),
  scss: path.resolve(assets, 'scss/'),
  assets,
  root,
  src,
};
