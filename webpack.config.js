var path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

console.log("__dirname:",  __dirname);
console.log("NODE_NEV",  process.env.NODE_ENV);

module.exports = {
  mode: process.env.NODE_ENV,
  context: path.resolve(__dirname, './src'),
  entry: {
    index: './js/index.js',
    about: './js/about.js',
  },
  output: {
    path: path.resolve(__dirname, './app'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ]
};