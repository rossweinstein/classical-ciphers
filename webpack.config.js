var path = require("path");
var webpackDev = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var DEVELOPMENT = process.env.NODE_ENV === "development";
var PRODUCTION = process.env.NODE_ENV === "production";

var GENERATE_HTML = new HtmlWebpackPlugin({
  title: "Custom Template",
  minify: {
    collapseWhitespace: true
  },
  template: "./src/site/html/template.ejs"
});

var DEV_SERVER_CONFIG = {
  hot: true,
  contentBase: path.join(__dirname, "dist"),
  compress: true,
  stats: "errors-only",
  open: true,
  openPage: ""
};

var POSTCSS = {
  test: /\.css$/,
  use: ExtractTextPlugin.extract({
    use: [
      {
        loader: "css-loader",
        options: { importLoaders: 1 }
      },
      "postcss-loader"
    ]
  })
};

var PROJECT_PLUGINS = PRODUCTION
  ? [GENERATE_HTML, new ExtractTextPlugin("bundle.css")]
  : [
      new webpackDev.HotModuleReplacementPlugin(),
      new webpackDev.NamedModulesPlugin(),
      GENERATE_HTML,
      new ExtractTextPlugin("bundle.css")
    ];

module.exports = {
  entry: "./src/site/js/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    loaders: [POSTCSS]
  },
  devServer: DEV_SERVER_CONFIG,
  plugins: PROJECT_PLUGINS
};
