var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var StyleLintPlugin = require('stylelint-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/modules/main-nav/Main-nav.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }        
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
                loader: 'css-loader',
                options: {
                    minimize: true,
                }
            }, 
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: true
                }
            }
          ]
        })
      },
      {
        // set up standard-loader as a preloader
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'standard-loader',
        exclude: /(node_modules|bower_components)/,
        options: {
          // Emit errors instead of warnings (default = false)
          error: false,
          // enable snazzy output (default = true)
          snazzy: true
        }
      },
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      title: 'MainNav',
      filename: 'index.html',
      template: './src/modules/main-nav/Main-nav.html'
    }),
    new ExtractTextPlugin({
      filename: 'style.css'
    }),
    new StyleLintPlugin()
  ]
};
