/*
 1. `module.exports`
    - Our 1st look at JS modules
    - A simple view is that in JS, modules are stored in files. There is exactly one module
    per file and one file per module.

  In modular JavaScript, all code is local to its module, and you must explicity "export" it,
  which makes it accessible by other modules if they choose.

  So here, the webpack.config module will export a single JavaScript object, that webpack itself will use.

  This is a JS file (extension of .js) so you will eventually have other code in here that will be executed
*/

module.exports = {
  entry: "./src/index.js",
  /*
    2. Entry - relative path to the entry point for your application

    webpack creates a graph of all of your application's dependencies. The starting point
    of this graph is known as an entry point. The entry point tells webpack where to start
    and follows the graph of dependencies to know what to bundle.

    You can think of your application's entry point as the contextual root or the
    first file to kick off your app.
  */
  output: {
    path: "./dist",
    filename: "application.bundle.js"
  },
  /*
    3. Output - relative path to the location of assembed application bundle

    Once you've bundled all of your assets together, we still need to tell webpack where to bundle
    our application. The webpack output property describes to webpack how to treat bundled code.
  */

  module: {
    loaders: [
      {test: /\.js$/, loader: "babel-loader", exclude: /node_modules/}
      /*
        5. babel-loader - a loader that will transform files using Babel
      */
    ]
  }
  /*
    4. Loaders - transform files into modules

    The goal is to have all of the assets in your project to be webpack's concern and not the browser's.
    (This doesn't mean that they all have to be bundled together). webpack treats every file
    (.css, .html, .scss, .jpg, etc.) as a module. However, webpack only understands JavaScript.

    Loaders in webpack transform these files into modules as they are added to your dependency graph.
  */
};

/*
  1. module.exports = {}
  2. entry
  3. output
  4. module.loaders
  5. Babel loader
*/
