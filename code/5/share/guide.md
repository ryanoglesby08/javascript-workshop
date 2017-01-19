Becoming an Application
===========================

Welcome to the next module of the workshop. This document will be your guide for
this one. Follow the steps in order to transition your application from a collection
of JavaScript files, into a modular application using webpack as its bundler.


## Instructions

You will be editing your code and using the command line as part of this module.
Lines that start with `$ <command>` are commands that you should enter into your terminal.
I recommend that you manually type the commands rather an copy-pasting.

In addition to lines that start with `$`, lines that start with [DO] mean you
should do what it is telling you. I'm marking them so you don't miss them.


## Preface

So far our architecture has been working just fine, we are using ES6 and JSX which is cool.
However, our app still works how older JavaScript applications work. The app is
really just a collection of JavaScript files that happen to work together by relying
on the presence of global variables.

An app structured like this just won't scale.
1) It is a hassle to add a <script> tag for every component we create and every
  library we need. Also, each of script tags must make a request to the server to
  fetch the JavaScript file, which is not good for performance.
2) We are not managing the versions of runtime libraries and depend on external CDNs.
3) Everything is a global! There are no declared dependencies of modules. We rely
  on global variables. :(

We need to introduce modularity and explicit dependency management into our app.

We need to take it from just being an assortment of files to an actual application.

We need webpack.


## Part 1: Starting with webpack

1. Install webpack as a development dependency

  `$ npm install webpack --save-dev`

  Webpack is a module bundler for modern JavaScript applications.

  So, what is a "JavaScript module", we will get to that soon. First, lets configure webpack.

2. Configure webpack for our application

  [DO] Download webpack.config.js from the same directory as this guide. Save it
    in the root of your project.
  [DO] Read through the webpack config and the comments describing the 3 main parts

3. Install the babel loader as a development dependency

  `$ npm install babel-loader --save-dev`

  You will notice that the webpack config is set up with a single loader. This loader
  is needed to hook webpack into Babel so that we will not have to run the tools
  separately.

4. Create the application bundle

  `$ ./node_modules/.bin/webpack`

  This command took our entire application (index.js and TweetBox.js and all their dependencies)
  and created a single JavaScript file - application.bundle.js.

  [DO] Notice the output of the webpack command, specifically the size of the
  emitted file. (It's probably around 2 kB. Super small... Almost too small...)

5. Open the application bundle in your editor

  The top has some webpack bootstrap stuff, and all the way at the bottom you will
  find the contents of index.js, the `ReactDOM.render()` call.

  But wait, this is supposed to be our entire application, including dependencies.
  Where is TweetBox? Where is React?

  Webpack creates a graph of all of your application's declared dependencies, but
  we have not declared any, so let's do that.

  [DO] Close the application.bundle.js file in your editor... You'll find out why
  soon.


## Part 2: Moving to modular JavaScript

In ES6, each file is a single module. Any dependencies of that module must
be explicitly declared using an `import` statement. Any variables or functions
declared within the module are private by default, meaning other modules cannot
see or use them. They can only be exposed to other modules with the `export`
statement.

1. Declare dependencies for index.js

  [DO] index.js depends on React, ReactDOM, and our TweetBox. They can be imported
  as follows. Add these lines to the top of the file.

  ```js
  import ReactDOM from "react-dom";
  import React from "react";

  import TweetBox from "./TweetBox";
  ```

  Notice that we use a relative path when referring to a module that we own. For
  third-party dependencies (found in node_modules) we can just reference the package
  name directly.

  Remember, when using JSX syntax, we must import React because the JSX syntax will
  get compiled to `React.createElement` by Babel.

2. Declare dependencies for TweetBox.js

  [DO] TweetBox only depends on React. Import it as you did before.

  Note: Even though `console` is used by the `postTweet` function, we don't need
  to declare it as a dependency. `console` is provided as a global by browsers,
  so it lives outside of the webpack, Babel, and ES6 world.

3. Declare exposed properties of TweetBox

  [DO] Use the export statement to make the TweetBox component available to any
  module that imports it from the TweetBox module. Add it to the bottom of the file.

  ```js
  export default TweetBox;
  ```

  We declare the TweetBox component as the default export of the TweetBox module.
  This is the convention for React components. Usually, each module that contains
  a React component would have a single module, which is the React Component itself,
  which usually shares a name with the module. A module can have a maximum of 1 default
  export.

  ES6 also has the concept of named exports. Modules can contain any number of named
  exports.

4. Install the rest of the application's third-party dependencies

  We have declared dependencies on React and ReactDOM, but so far we only access
  those through global &lt;script&gt; tags. Instead, let's install those as
  node_modules.

  `$ npm install react react-dom --save`

  React and ReactDOM are both runtime dependencies, so we use `--save`.

5. Create the full application bundle

  `$ ./node_modules/.bin/webpack`

  [DO] Notice the output of the webpack command again, specifically the size of the
  emitted file. It should be way bigger! Around 750 kB. IntelliJ can be slow with
  large files sometimes, so better not to open it there.

  Why is it so much bigger? Now that we have properly declared our dependencies,
  our application graph includes the index and TweetBox modules, as well as the React
  and ReactDOM modules, and any modules declared by them! Our entire application
  is contained within this 1 file.

  As your application grows in size, eventually it could become too big to make sense
  to be a single file. Webpack has advanced features to alleviate this problem, called
  code-splitting or chunking. This won't be a problem for a while though.


## Part 3: Tying it all together

1. Use your new application bundle in your index.html

  [DO] In your index.html file, remove all &lt;script&gt; tags and only include a single
  &lt;script&gt; tag that references your new application.bundle.js file.

  ```html
  <body>
    <div id="root"></div>

    <script type="text/javascript" src="dist/application.bundle.js"></script>
  </body>
  ```

  [DO] Delete any other files that may still be in the "dist" folder. All you need
  in "dist" now is application.bundle.js.

2. Refresh your browser!

## Part 4: Challenge! Extract postTweet as a separate module.

ES6 Modules can contain any JavaScript code. An ES6 module could contain a single
ES6 class, it could contain a collection of functions, or a single variable. In all
these cases, the module could have 0 or more exports.

Here is another example of a valid ES6 module:

```js
// calculate.js

// `add` is a private, unaccessible function. It is visible only to this module.
const add = (x, y) => {
  return x + y;
};

// Export `sumOf` as a named export of the calculate module
// Another module can import this function like this: `import {sumOf} from "/relative/path/to/calculate";`
export const sumOf = (array) => {
  return array.reduce(add);
};

// Export `averageOf` as a named export of the calculate module
// Another module can import this function like this: `import {averageOf} from "/relative/path/to/calculate";`
export const averageOf = (array) => {
  return sumOf(array) / array.length;
};
```

1. Before you start, let's set up your dev environment for super fast feedback.

  [DO] Edit the npm scripts in package.json to change your build script to use
  webpack instead of Babel directly.

  ```json
  "scripts": {
    "build": "webpack --progress --colors",
    "build:watch": "npm run build -- --watch",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
  ```

  `$ npm run build:watch`

  When putting webpack into "watch" mode, it will detect any changes to your bundle,
  meaning any changed modules that are already included in the bundle, or any new
  additions to the module dependencies, and re-build the bundle.

  Now just leave this terminal window open to keep the watch running while you work.

2. Extract `postTweet` as its own module.

  [DO] Your Challenge is to extract the `postTweet` function out of the TweeBox module
  and into its own module, named `postTweet`.

  [DO] You will then need to declare the `postTweet` module as a dependency of the index module,
  and pass the `postTweet` function into the `TweetBox` component as a prop.

  ** Remember! Any time you change the bundle, the webpack watch will re-build it. So
  check that terminal window often to see if there are any errors. **


** Done! **
Make a commit to save your progress!


## Further Exploration:

* Webpack
  * What is webpack? <http://webpack.github.io/docs/what-is-webpack.html>
  * List of loaders: <https://webpack.github.io/docs/list-of-loaders.html>
  * Code splitting/chunking: <https://webpack.github.io/docs/code-splitting.html>
* ES6 modules <http://exploringjs.com/es6/ch_modules.html>
