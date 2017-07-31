var path = require('path');
var webpackDev = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var DEVELOPMENT = process.env.NODE_ENV === 'development';
var PRODUCTION = process.env.NODE_ENV === 'production';

var entryPoint = PRODUCTION ? [ './src/site/js/index.js' ]
                            : [ 
                                './src/site/js/index.js',
                                'webpack/hot/dev-server',
                                'webpack-dev-server/client?http://localhost:8080'
                            ];

var thePugins = PRODUCTION  ? []
                            : [ 
                                new webpackDev.HotModuleReplacementPlugin(),
                                new HtmlWebpackPlugin({
                                    template: './src/site/html/index.ejs',
                                    inject: "body"
                                }) 
                            ];

module.exports = {
    entry: entryPoint,
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist',
        filename: 'bundle.js'
    },
    plugins: thePugins
};