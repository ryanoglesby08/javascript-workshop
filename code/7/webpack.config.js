module.exports = {
  entry: "./src/index.js",
  output: {
    path: "./dist",
    filename: "application.bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: "babel-loader", exclude: /node_modules/}
    ]
  }
};
