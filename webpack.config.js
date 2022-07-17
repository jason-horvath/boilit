const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const Dotenv = require('dotenv-webpack');

require('dotenv').config()

module.exports = {
  name: "boilit",
  entry: './src/index.ts',
  mode: process.env.APP_ENV,
  devtool: 'source-map',
  devServer: {
    liveReload: true,
    port: process.env.APP_DEV_PORT,
    open: ['./'],
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(css|scss|sass)?$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      "@components": path.resolve(__dirname, 'src/components'),
      "@config": path.resolve(__dirname, 'src/config'),
      "@layout": path.resolve(__dirname, 'src/layout'),
      "@routing": path.resolve(__dirname, 'src/routing'),
      "@views": path.resolve(__dirname, 'src/views'),
    }
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/js'),
    publicPath: '/',
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
        template: 'dist/index.html'
    }),
    ...((/true/i).test(process.env.APP_ANALYZE) ? [new BundleAnalyzerPlugin()] : [])
  ],
};
