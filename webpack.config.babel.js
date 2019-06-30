import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import StyleLintPlugin from 'stylelint-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import autoprefixer from 'autoprefixer';

const SCSS_PATTERN = /\.scss$/;
const JS_JSX_PATTERN = /\.jsx?$/;
const ASSET_PATTERN = /\.(jpe?g|png|gif|svg|ttf|otf|eot|woff(2)?)(\?v=\d+)?$/;

const config = {
  entry: {
    ['rick-and-morty-app']: [
      'index.jsx',
      'index.scss',
    ],
  },
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: JS_JSX_PATTERN,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'eslint-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: SCSS_PATTERN,
        enforce: 'pre',
        loader: 'import-glob-loader',
      },
      {
        test: SCSS_PATTERN,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer],
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src'],
          },
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: ASSET_PATTERN,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]?[hash]',
          context: 'assets',
        },
      },
    ],
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'assets'),
      path.resolve(__dirname, 'src'),
    ],
    extensions: ['.js', '.jsx', '.json'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
    new MiniCssExtractPlugin({
      filename: 'rick-and-morty-app.css',
      allChunks: true,
    }),
    new StyleLintPlugin({
      configFile: path.resolve(__dirname, '.stylelintrc.json'),
      files: 'src/**/*.scss',
      syntax: 'scss',
    }),
  ],
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
};

export default config;
