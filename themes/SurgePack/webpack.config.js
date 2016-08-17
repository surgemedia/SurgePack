// webpack.config.js
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
var path = require('path');
var $ = require("jquery");

module.exports = {
  devServer: {
        inline: true,
        contentBase: './',
        port: 3001
    },
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
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
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
