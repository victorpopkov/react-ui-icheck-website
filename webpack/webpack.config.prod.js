const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const common = require('./webpack.config.common');
const paths = require('./paths');

const performanceSize = 256 * 3 * 1000;

const cssLoaders = (mode) => [
  MiniCssExtractPlugin.loader,
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
    options: { resources: path.join(paths.src, 'app/sass-resources.scss') },
  },
];

module.exports = merge(common, {
  devtool: 'hidden-source-map',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
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
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: ['default'],
        },
      }),
    ],
  },
  output: {
    filename: '[name].[chunkhash].js',
  },
  performance: {
    maxAssetSize: performanceSize,
    maxEntrypointSize: performanceSize,
  },
  plugins: [
    new webpack.IgnorePlugin(/\/config$/, /\.\/dev/),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[chunkhash].css',
      chunkFilename: 'assets/css/[id].css',
    }),
  ],
});
