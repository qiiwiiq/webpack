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
    filename: './js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        }]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ]
};