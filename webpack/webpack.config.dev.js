const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.config.common');
const config = require('../config');
const paths = require('./paths');

const cssLoaders = (mode) => [
  'style-loader',
  {
    loader: 'css-loader',
    options: {
      importLoaders: 2,
      modules: {
        localIdentName: '[local]___[hash:base64:5]',
        mode,
      },
      sourceMap: true,
    },
  },
  { loader: 'resolve-url-loader', options: { sourceMap: true } },
  { loader: 'postcss-loader', options: { sourceMap: true } },
];

const scssLoaders = (mode) => [
  ...cssLoaders(mode),
  {
    loader: 'sass-loader',
    options: { sassOptions: { outputStyle: 'expanded' }, sourceMap: true },
  },
  {
    loader: 'sass-resources-loader',
    options: { resources: path.join(paths.scss, 'sass-resources.scss') },
  },
];

module.exports = merge(common, {
  devServer: {
    host: config.app.host,
    hot: 'only',
    port: config.app.port,
    client: {
      overlay: {
        errors: true,
        warnings: true,
      },
    },
    devMiddleware: {
      publicPath: common.output.publicPath,
    },
    static: {
      directory: paths.dist,
      publicPath: common.output.publicPath,
    },
  },
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css?$/,
        include: [/node_modules|src\/assets/],
        use: cssLoaders('global'),
      },
      {
        test: /\.css?$/,
        exclude: [/node_modules|src\/assets/],
        use: cssLoaders('local'),
      },
      {
        test: /\.scss?$/,
        include: [/node_modules|src\/assets/],
        use: scssLoaders('global'),
      },
      {
        test: /\.scss?$/,
        exclude: [/node_modules|src\/assets/],
        use: scssLoaders('local'),
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
  },
  plugins: [
    new webpack.IgnorePlugin({
      resourceRegExp: /webpack-stats\.json$/,
    }),
    new ESLintPlugin(),
    new ReactRefreshWebpackPlugin(),
    new StyleLintPlugin(),
  ],
});
