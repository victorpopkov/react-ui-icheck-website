const path = require('path');
const DotenvPlugin = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const config = require('../config');
const paths = require('./paths');

module.exports = {
  context: paths.root,
  entry: {
    vendor: path.join(paths.scss, 'vendor.scss'),
    app: [path.join(paths.src, 'app.jsx'), path.join(paths.scss, 'app.scss')],
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 512,
              name: 'assets/images/[name].[ext]',
              publicPath: config.app.publicPath,
            },
          },
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                { cleanupIDs: false },
                { removeAttrs: { attrs: '(data-name)' } },
              ],
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        type: 'asset',
      },
    ],
  },
  output: {
    filename: '[name].js',
    path: paths.dist,
    publicPath: config.app.publicPath,
  },
  resolve: {
    modules: ['src', 'node_modules'],
    alias: {
      '@Config': paths.config,
      '@Root': paths.root,
    },
    extensions: ['.json', '.js', '.jsx'],
    symlinks: false,
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new DotenvPlugin({
      path: path.resolve(paths.root, '.env'),
      silent: true,
      systemvars: true,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(paths.src, 'index.html'),
    }),
  ],
};
