const DotenvPlugin = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const config = require('../config');
const paths = require('./paths');

const imageLoaders = [
  {
    loader: 'url-loader',
    options: {
      limit: 512,
      name: 'assets/images/[name].[ext]',
      publicPath: config.app.publicPath,
    },
  },
];

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
        exclude: /node_modules\/icheck/,
        use: [
          ...imageLoaders,
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
        exclude: /node_modules\/icheck/,
        use: imageLoaders,
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        include: /node_modules\/icheck/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 512,
              name: 'assets/images/icheck/[1]/[name].[ext]',
              publicPath: config.app.publicPath,
              regExp: /\/([a-z0-9]+)\/[a-z0-9]+(@2x)?\.png$/,
            },
          },
        ],
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
