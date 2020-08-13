const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;

var webpack = require('webpack')

const filename = ext => isDev ? `bundle.${ext}` : `bundle.[hash].${ext}`;

const jsLoaders = () => {
  const loaders = [{
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
      plugins: ['@babel/plugin-proposal-class-properties'],
    },
  }];
  if (isDev) {
    loaders.push({
      loader: 'eslint-loader',
      options: {
        fix: true
      }
    })
  }
  return loaders
};

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: ['@babel/polyfill', './index.js'],
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@core': path.resolve(__dirname, 'src/core')
    }
  },
  externals: {
    // require("jquery") is external and available
    // on the global var jQuery
    "jquery": "jQuery",
    "jquery-ui": "jquery-ui/jquery-ui.js",
  },
  devtool: isDev ? 'source-map' : false,
  devServer: {
    port: 3000,
    hot: isDev,
  },
  plugins: [
    // new webpack.ProvidePlugin({
    //   "$":"jquery",
    //   "jQuery":"jquery",
    //   "window.jQuery":"jquery"
    // }),
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: 'index.html',
      minify: {
        removeComments: isProd,
        collapseWhitespace: isProd,
      }
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/favicon.ico'),
          to: path.resolve(__dirname, 'dist')
        },
        {
          from: path.resolve(__dirname, 'src/img'),
          to: path.resolve(__dirname, 'dist/img')
        }
      ],
    }),
    new MiniCssExtractPlugin({
      filename: filename('css'),
    }),

  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDev,
              reloadAll: true,
            }
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: jsLoaders(),
      }, {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        // include: path.resolve(__dirname, 'src'),
        use: [{
          loader: 'file-loader'
        }],
      }
    ],
  },
};
