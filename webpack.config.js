var path = require('path');

module.exports = {
  entry: ["./src/stylesheets/index.scss", "./src/index.js"],

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
      loaders: [
        "style", "css", "sass?" +
          "includePaths[]=" +
          (path.resolve(__dirname, "./node_modules"))
      ]
    }]
  },
};
