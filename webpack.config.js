var path = require('path');
var webpackDev = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var DEVELOPMENT = process.env.NODE_ENV === 'development';
var PRODUCTION = process.env.NODE_ENV === 'production';

var GENERATE_HTML = new HtmlWebpackPlugin({
    title: 'Custom Template',
    minify: {
        collapseWhitespace: true
    },
    template: './src/site/html/template.ejs' 
});

var thePugins = PRODUCTION  ? [GENERATE_HTML]
                            : [ new webpackDev.HotModuleReplacementPlugin(),
                                GENERATE_HTML];



module.exports = {
    entry: './src/site/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        stats: "errors-only",
        open: true,
        openPage: ''
    },
    plugins: thePugins
};

