var HtmlWebpackPlugin = require('html-webpack-plugin') // Create HTML files to serve the bundles
const ExtractTextPlugin = require('extract-text-webpack-plugin') // Extract text (.CSS) from bundle into a separate file
var StyleLintPlugin = require('stylelint-webpack-plugin') // CSS linter.
const UglifyJsPlugin = require('uglifyjs-webpack-plugin') // To minify JavaScript
const path = require('path')

/*
Essentially, webpack loaders transform all types of files into modules that can be included in your
application's dependency graph (and eventually a bundle).

1. The test property identifies which file or files should be transformed.
2. The use property indicates which loader should be used to do the transforming.
*/

/*
Plugins range from bundle optimization and minification all the way to defining environment-like variables.
*/
module.exports = {
  entry: './src/main.js',
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
                minimize: true
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
        test: /\.pug/,
        loaders: ['html-loader', 'pug-html-loader']
      },
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'standard-loader',
        exclude: /(node_modules|bower_components)/,
        options: {
          error: false,
          snazzy: true
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Index',
      template: './src/main.pug'
    }),
    new ExtractTextPlugin({
      filename: 'style.css'
    }),
    new StyleLintPlugin(),
    new UglifyJsPlugin({
      uglifyOptions: {
        output: {
          comments: false
        }
      }
    })
  ]
}
