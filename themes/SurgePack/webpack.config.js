// webpack.config.js
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
var path = require('path');
var $ = require("jquery");
var autoprefixer = require('autoprefixer');
var precss       = require('precss');

module.exports = {
    entry: "./assets/js/main.js",
    output: {
        path: __dirname+'/dist/',
        filename: "bundle.js"
    },

     module: {
    loaders: [
      {
                test: /\.js$/,
                loaders: ['babel'],
                include: __dirname
     },{
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!sass-loader")
      },
      {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file?name=/fonts/[name].[ext]'
        },
        {
                test: /\.(png|jpg|jpeg|bmp)$/,
                loader: 'file?name=/imgs/[name].[ext]'
        }
        
    ]
  },
  postcss: function () {
        return {
            defaults: [precss, autoprefixer],
            cleaner:  [autoprefixer({ browsers: ['last 2 version',
    '> 1%',
    'ie >= 9',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4',
    'bb >= 10'] })]
        };
    },
  sassLoader: { },
  plugins: [
        new ExtractTextPlugin("bundle.css"),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            'window.jQuery': 'jquery'
        }),
    ],
    resolve: {
      alias: {
          'jquery': path.join(__dirname, 'node_modules/jquery/dist/jquery'),
      }
    }
};
