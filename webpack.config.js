var webpack = require("webpack");
var path = require('path');

module.exports = {
  entry: {
    app: ["./src/stylesheets/index.scss", "./src/index.js"],
    // vendor: ["react", "react-dom", "react-redux", "redux"]
  },

  output: {
    path: __dirname + "/built/static",
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
      loader: "babel",
      include: __dirname,
      query: {
        presets: [ 'es2015', 'react' ]
      }
    }, {
      test: /\.scss$/,
      loaders: [
        "style", "css", "sass?" +
          "includePaths[]=" +
          (path.resolve(__dirname, "./node_modules"))
      ]
    }]
  },

  plugins: [
    // new webpack.optimize.CommonsChunkPlugin(#<{(| chunkName= |)}>#"vendor", #<{(| filename= |)}>#"vendor.bundle.js"),
    new webpack.DefinePlugin({
      PRODUCTION: process.env.NODE_ENV === "production"
    })
  ],

  devtool: "source-map",
};
