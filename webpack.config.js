const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// const APP_DIR = path.resolve(__dirname, '../src');
// const OUPUT_DIR = path.resolve(__dirname, '../dist');

module.exports = {
  devServer: {
    historyApiFallback: true
  },
  // entry: {
  //   app: APP_DIR,
  // },
  // output: {
  //   path: OUPUT_DIR,
  //   filename: '[name].[contenthash].js',
  // },
  resolve: {
    modules: [path.resolve(__dirname, '../node_modules')],
    alias: {
      // '@/images': path.resolve(__dirname, '../src/assets/images'),
      // '@/utils': path.resolve(__dirname, '../src/utils'),
      '@': path.resolve(__dirname, './src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Demo 688',
      template: path.resolve(__dirname, './public/index.html'),
      filename: 'index.html',
    }),
  ],
};
