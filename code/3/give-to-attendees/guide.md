ES6 + JSX + Babel
===========================

Welcome to the next module of the workshop. This document will be your guide for
this one. Follow the steps in order to introduce ECMAScript 6, JSX syntax, and the
Babel JavaScript compiler to your project.

You will be editing your code and using the command line as part of this module.
Lines that start with "$" are commands that you should enter into your terminal.
I recommend that you manually type the commands rather an copy-pasting.

## Preface

Now that we have a Component and a little behavior, we can realize some downsides.

For one, it is difficult to visualize the HTML structure of the components that we
are creating. The `React.createElement` syntax is pretty verbose, and does not feel
natural given that we basically writing HTML. Imagine if we had multiple components
and multiple nested elements. It gets out of hand pretty quickly.

On top of that, we are using vanilla JavaScript, which means we may have a hard time
using many modern language features, because we will likely run into browser
compatibility issues.

Facebook (React) advices against writing apps in this way for these reasons and more.
So, they introduced a new syntax, called JSX, to make it better.


## Part 1: Move to ECMAScript 6 (ES6)

1. Extract the inlined JavaScript with the `ReactDOM.render` from index.html into
    a new file called index.js.

   Include it with a <script> tag in index.html _after_ TweetBox.js.

   Here is what should be inside the <body> tag in index.html:

   ```html
   <div id="root"></div>

   <script type="text/javascript" src="TweetBox.js"></script>
   <script type="text/javascript" src="index.js"></script>
   ```

2. Rewrite index.js in valid ES6 syntax.
   ... nothing to do here! It is actually already in valid ES6. :)

3. Rewrite TweetBox.js in valid ES6 syntax.
   TODO: FINISH THIS!!!!

4. Refresh index.html in your browser.

   If you are using a modern browser, such as Google Chrome or Firefox, the app will
    continue to work as before. The latest versions of all modern browsers have
    support for ECMAScript 6. However, older browsers such as IE 9 do not.

   If something goes wrong, check the JavaScript console for errors. You most likely
    have a syntax error.


## Part 2: Move to JSX syntax

1. Rewrite index.js using JSX syntax.

   JSX is an preprocessor step that adds XML syntax to JavaScript to make writing
    React Components easier, so the changes are minimal and only effect React Components.
    Fundamentally, JSX provides syntactic sugar for `React.createElement`.

   Change this:
    `React.createElement(TweetBox, {placeholder: "What's happening?"})`
   to this:
    `<TweetBox placeholder="What's happening?" />`

2. Rewrite TweetBox.js using JSX syntax.

    TODO: FINISH THIS!!!!

3. Refresh index.html in your browser.

   The app won't render anything, expectedly. Check the JavaScript console and you should see
    an error that looks like this: `Uncaught SyntaxError: Unexpected token <`

   This is because JSX is a preprocessor step, and is not supported by any major
    browser at this time.

   This doubly reveals the need for a build step in our JavaScript application.
    First, now that we are writing our JavaScript using modern ES6 features, we lose support
    for the many older browsers that remain in use. Furthermore, as the ECMAScript
    standard advances, we will want to use new features as they become available, before
    any browsers support them (such as Object Rest Spread, which becomes very useful
    in React apps).
    Second, now that we are writing our React components using JSX syntax, while
    gaining a friendly syntax, we lose support for all browsers.

   The solution in the JavaScript community is to introduce a build step that will
    compile your modern JavaScript into JavaScript that can be run by any browser.


## Part 3: Get Started with Babel

At this point, we start the transition from a collection of HTML and JavaScript files,
into an application in a more true sense of the word.

** In addition to lines that start with `$`, lines that start with [DO] mean you
should do what it is telling you. I'm marking them so you don't miss them. **


1. Initialize the directory as an npm project.

  `$ npm init` (in the root directory of your project)

  This command will help you interactively create a "package.json" file, which is
   the npm standard file that describes your project or package.

  [DO] Once its done, you will have a new file named package.json. Open it up to
   see its structure.

  Once you are comfortable developing with JavaScript, this would be your first
   step when starting a new project.

2. Install the Babel CLI as a dependency for this project.

  `$ npm install babel-cli --save-dev`

  The `npm install` command downloads a JavaScript package from a node package
   repository into the "node_modules" directory of the current project.
  The `--save-dev` flag causes an entry to be added into the package.json file to
   denote which packages are part of the project. There are two ways to mark dependencies
   using npm. `--save` marks it as a runtime dependency, meaning it should be used
   as part of the running application, such as a library for making API calls.
   `--save-dev` marks it as a development dependency, meaning it should only be used
   for development purposes such as testing or compilation.

  [DO] Open package.json and notice the entry for `babel-cli` that is now present
    in the "devDependencies" section.

  `$ ls node_modules/`

  Notice that many dependencies were downloaded along with Babel. These are all of
  Babel's dependencies. The JavaScript ecosystem is known (and criticized) for
  a proliferation of tiny libraries.

  `$ cat node_modules/array-unique/index.js`

  Here is an example. The array-unique package has 1 file that

  TODO: finish the description here according to the homepage!

3. Verify the Babel is installed and is executable.

  `$ ./node_modules/.bin/babel --help`

  Any node module that has an executable file will automatically be installed into
   `node_modules/.bin`.

4. Create a simple test file to illustrate Babel.

  `$ echo "[1,2,3].map((n) => n+1);" > test.js`

  This file contains some ES6 code. Namely, an arrow function.

5. Compile the test file with Babel.

  `$ ./node_modules/.bin/babel test.js`

  ... and nothing happens!

  Babel, like many others, is a 3-stage compiler: parse, transform, and generate.
   Transformations in Babel are architected as a plugin system. So, without any
   plugins, Babel basically only does the parse and generate steps, making it a no-op.

  Before Babel can be very useful to us, we will have to install some transformation
   plugins, called presets, and configure Babel to use them.


## Part 4: Configure Babel with ES6 preset

1. Install the "latest" preset.

  `$ npm install babel-preset-latest --save-dev`

  "latest" means to give me all the latest yearly language updates. Notice we do `--save-dev`
   again because a Babel preset is a development dependency.

  This will only download the node module, and now we need to tell Babel to use it.

2. Create a Babel configuration file.

  `$ touch .babelrc`

  [DO] Edit the .babelrc file as follows: (It uses JSON syntax)
  ```json
  {
    "presets": ["latest"]
  }
  ```

3. Try again at compiling the test file.

  `$ ./node_modules/.bin/babel test.js`

  You should see some output that looks like:
  ```js
  "use strict";

  [1, 2, 3].map(function (n) {
    return n + 1;
  });
  ```

  It worked! The arrow function was compiled into the more verbose "function" syntax.

  `$ rm test.js` (We won't need it anymore)


## Part 5: Compile our application files with Babel

1. Try to compile index.js with Babel.

  `$ ./node_modules/.bin/babel index.js`

  BOOM! You should see a syntax error similar to what you saw in the browser before.

  TODO: Run this to get the actual error!

  The "latest" preset only includes standard ECMAScript syntax and features, but JSX
   is not a standard part of the language. We will need to install and configure
   another preset to add support for JSX.

2. Install the Babel React preset.

  `$ npm install babel-preset-react --save-dev`

3. Add the React preset to the Babel configuration file.

  [DO] Edit .babelrc
  ```json
  {
    "presets": ["latest", "react"]
  }
  ```

4. Compile index.js with Babel.

  `$ ./node_modules/.bin/babel index.js`

  You should see output that looks suspiciously similar to the way we wrote it originally,
   using `React.createElement`. The browser will be able to interpret `React.createElement`.


## Part 6: Set up a compilation step for the project.

1. Create source code and compilation target directories.

  `$ mkdir src`
  `$ mv index.js src/`
  `$ mv TweetBox.js src/`
  `$ mkdir dist`

  The "src" and "dist" directory names are conventional, but arbitrary.

  We will leave index.html in the root of the project.

2. Create an npm script for compilation.

  [DO] Edit your package.json to add a script.

  ```json
  "scripts": {
    "build": "babel src/ -d dist/",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
  ```

  The "build" script will compile all JavaScript files in the "src" directory, and
   output into the "dist" directory.

3. Compile source files

  `$ npm run build`

  You can run any configured script in your package.json with `npm run <command>`.
  Also, `npm run` will list out all the available scripts, including ones that come
   with npm.

4. Edit index.html to point to the compiled files.

  [DO] Here is what should be inside the <body> tag in index.html:

  ```html
  <div id="root"></div>

  <script type="text/javascript" src="dist/TweetBox.js"></script>
  <script type="text/javascript" src="dist/index.js"></script>
  ```

5. Refresh index.html in your browser.

  The app should be back to working again.


** Done! **
Make a commit to save your progress!
