const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.join(__dirname, 'app'),
  entry: {
    javascript: './main.js',
    html: './index.html'
  },

  output: {
    filename: 'app.built.js',
    path: `${__dirname}/www`
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel?presets[]=es2015&presets[]=stage-1&presets[]=react']
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.css$/,
        // loader: 'style!css'
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)(\?[\S^=]+=[\S^=]+)?$/,
        loader: 'url?limit=100000'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'url?limit=10000'
      }
    ]
  },

  resolve: {
    modulesDirectories: [
      'node_modules',
      __dirname
    ]
  },

  plugins: [
    new ExtractTextPlugin('app.built.css')
  ]
};
