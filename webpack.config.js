module.exports = {
  entry: "./index",

  output: {
    path: __dirname,
    filename: "bundle.js",
    publicPath: "/static/"
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ["babel"],
      include: __dirname
    }]
  }
};
