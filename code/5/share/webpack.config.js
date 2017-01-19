module.exports = {
  entry: './src/index.js',
  /*
    Entry - relative path to your application's entry point

    webpack creates a graph of all of your application's dependencies. The starting point
    of this graph is known as an entry point. The entry point tells webpack where to start
    and follows the graph of dependencies to know what to bundle.

    You can think of your application's entry point as the contextual root or the
    first file to kick off your app.
  */

  output: {
    path: './dist',
    filename: 'application.bundle.js'
  },
  /*
    Output - relative path to the location of assembed application bundle

    Once you've bundled all of your assets together, we still need to tell webpack where to bundle
    our application. The webpack output property describes to webpack how to treat bundled code.
  */

  module: {
    loaders: [
      {test: /\.js$/, loader: "babel-loader", exclude: /node_modules/}
    ]
  }
  /*
    Loaders - transform files into modules

    The goal is to have all of the assets in your project to be webpack's concern and not the browser's.
    (This doesn't mean that they all have to be bundled together). webpack treats every file
    (.css, .html, .scss, .jpg, etc.) as a module. However, webpack only understands JavaScript.

    Loaders in webpack transform these files into modules as they are added to your dependency graph.
  */
};
