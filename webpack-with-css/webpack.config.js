const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'static/js/[name].js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      { 
        test: /\.css$/, 
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin('build'),
    new HtmlWebpackPlugin({
      title: 'Webpack-with-css',
      filename: 'index.html',
      template: 'public/index.html'
    }),
    new ExtractTextPlugin({
      filename: "[name].[hash:5].css"
    })
  ]
}