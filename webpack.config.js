var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

module.exports = {
  entry: ["./src/css/index.scss", "./src/index.js"],

  output: {
    path: __dirname,
    filename: "bundle.js",
    publicPath: "/static/"
  },

  resolve: {
    root: [__dirname + "/src"]
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ["babel"],
      include: __dirname
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(
        "style-loader", "css-loader", "autoprefixer-loader",
        "sass-loader?includePaths[]=" + (path.resolve(__dirname, "./node_modules"))
      )
    }]
  },

  plugins: [
    new ExtractTextPlugin("./bundle.css")
  ]
};
