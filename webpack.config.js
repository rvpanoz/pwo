/**
  Webpack configuration file
**/

const path = require('path');
const webpack = require('webpack');
const chalk = require('chalk');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const PORT = 9805;

module.exports = {
  devtool: 'source-map',
  entry: {
    vendor: [
      path.resolve(path.join(__dirname, 'node_modules/bootstrap/dist/css/bootstrap.css')),
      path.resolve(path.join(__dirname, 'node_modules/font-awesome/css/font-awesome.css'))
    ],
    app: ['babel-polyfill', 'whatwg-fetch', './src/main.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'pwo.index-[name].js'
  },
  devServer: {
    port: PORT,
    historyApiFallback: true,
    stats: {
      colors: true,
      version: true
    },
    quiet: true,
    noInfo: false,
    inline: true,
    lazy: false,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    contentBase: path.resolve(__dirname, 'dist'),
    before: function() {
      //todo
    },
    after: function() {
      console.log(chalk.green(`Webpack devServer started at port: ${PORT}`));
    }
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        options: {
          presets: [
            'react', 'es2015', 'stage-2'
          ],
          plugins: [require('babel-plugin-transform-regenerator')]
        }
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      // WOFF Font
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/font-woff'
          }
        }
      },
      // WOFF2 Font
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/font-woff'
          }
        }
      },
      // TTF Font
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/octet-stream'
          }
        }
      },
      // EOT Font
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: 'file-loader'
      },
      // SVG Font
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'image/svg+xml'
          }
        }
      },
      // Common Image Formats
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/,
        use: 'url-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      'Promise': 'es6-promise',
      'fetch': 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    // new webpack.optimize.UglifyJsPlugin()
  ]
}
