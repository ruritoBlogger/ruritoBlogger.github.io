import * as path from 'path'
import * as webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin';

import { devBabelConfig } from './babel.config';

const src = path.resolve(__dirname, 'src');
const pub = path.resolve(__dirname, 'public');

const config: webpack.Configuration = {
  mode: 'development',
  entry: `${src}/index.tsx`,

  output: {
    path: pub,
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: devBabelConfig,
      },
      {
        test: /\.scss/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { url: false },
          },
          'sass-loader',
        ],
      },
    ],
  },

  devServer: {
    host: '0.0.0.0',
    port: 3000,
    contentBase: pub,
    historyApiFallback: true,
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: `${pub}/index.base.html`,
      filename: 'index.html',
    }),
  ],
};

export default config;
