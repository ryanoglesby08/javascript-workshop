ES6 + JSX + Babel
===========================

Welcome to the next module of the workshop. This document will be your guide for
this one. Follow the steps in order to introduce ECMAScript 6, JSX syntax, and the
Babel JavaScript compiler to your project.


## Instructions

You will be editing your code and using the command line as part of this module.
Lines that start with `$ <command>` are commands that you should enter into your terminal.
I recommend that you manually type the commands rather an copy-pasting.

In addition to lines that start with `$`, lines that start with [DO] mean you
should do what it is telling you. I'm marking them so you don't miss them.


## Motivation

Now that we have some components and a little behavior, we can see some downsides.

For one, it is difficult to visualize the HTML structure of the components that we
are creating. The `React.createElement` syntax is pretty verbose, and does not feel
natural given that we basically writing HTML. Imagine if we had many components
containing many nested elements. It gets out of hand pretty quickly.

**Because of these deficiencies, Facebook advices against using `React.createElement`
directly, so they introduced a new syntax, called JSX.**

On top of that, we are currently writing our JavaScript using the ECMAScript 5
syntax. ECMAScript is the official specification for the JavaScript programming
language that every JavaScript runtime environment (Web browsers, servers, IOT devices)
must implement. ECMAScript 6 (ES6) (also called ES2015 for the year it was released)
marked a major milestone for JavaScript, defining a number of new APIs and syntax. [1]
If we want to write expressive, modern JavaScript, we must write our code to target
at least ES6.

But, as each Web browser and device is maintained separately, each one adopts
new language features at different times. So, if you just write your JavaScript
using the latest language features, you are likely to run into compatibility issues,
especially if your Web site will be used by people with older browsers, such as
Internet Explorer 11. And, if you are using powerful, bleeding-edge features it is
likely that no browsers will support it yet.

This discrepancy between the JavaScript features that we want to use, and the ones
that are supported by Web browsers is the core motivation for this module. By
introducing a compilation step, we will ensure that the ES6+ code that we write
will be compatible with any Web browser in use.


[1] _As of May 2017, the ES spec is currently reviewing proposals for the 8th
edition._


## Part 1: Move to ECMAScript 6 (ES6)

1. Extract the inlined JavaScript with the `ReactDOM.render` from index.html into
   a new file called index.js.

   [DO] Include it with a &lt;script&gt; tag in index.html _after_ all the components.

   Here is what should be inside the &lt;body&gt; tag in index.html:

   ```html
   <div id="root"></div>

   <script type="text/javascript" src="TweetBox.js"></script>
   <script type="text/javascript" src="Feed.js"></script>
   <script type="text/javascript" src="Tweeter.js"></script>
   <script type="text/javascript" src="index.js"></script>
   ```

2. Rewrite index.js using ES6 syntax.

   ... nothing to do here! It is actually already in valid ES6. :)

3. Rewrite TweetBox.js using ES6 syntax.

   [DO] Replace all `var` declarations with `const`. <br/>
   <https://babeljs.io/learn-es2015/#ecmascript-2015-features-let-const>

   [DO] Replace all `function` declarations with the arrow function syntax.

   For example:

   ```js
   // Instead of...
   const hello = function(name) {
     return "Hello " + name;
   };

   // use this.
   const hello = (name) => {
     return "Hello " + name;
   };
   ```
   <http://es6-features.org/#StatementBodies>

   [DO] If using IntelliJ, configure IntelliJ to recognize ES6 syntax.

      * Command + "," to open up the settings menu.
      * Choose Languages & Frameworks > JavaScript.
      * Change "JavaScript language version" to "React JSX" (your IntelliJ version
      may show "JSX Harmony" instead, they are the same).

4. Refresh index.html in your browser.

   If you are using a modern browser, such as Google Chrome or Firefox, the app will
   continue to work as before. The latest versions of all modern browsers have
   support for ECMAScript 6. However, older browsers such as IE 11 and below do not.

   If something goes wrong, check the JavaScript console for errors. You most likely
   have a syntax error.

5. Rewrite Feed.js using ES6 syntax.

   [DO] Replace all `var` declarations with `const`.

   [DO] Replace all `function` declarations with the arrow function syntax.

   [DO] Use destructing to extract a named key from the "props" argument.

    For example:

    ```js
    // Instead of...
    const Hello = function(props) {
      return "Hello " + props.name;
    };

    // use this.
    const hello = ({name}) => {
      return "Hello " + name;
    };
    ```
    <http://es6-features.org/#ParameterContextMatching>

6. Refresh index.html in your browser and make sure there are no errors.

7. Rewrite Tweeter.js using ES6 syntax.

   [DO] Replace all `var` declarations with `const`.

   [DO] Replace all `function` declarations with the arrow function syntax.

   [DO] The `Tweeter` function is only a return statement, so there is a shorthand for that.

   For example:

   ```js
   // Instead of...
   const hello = ({name}) => {
      return "Hello " + name;
   };

   // use this.
   const hello = ({name}) => (
      "Hello " + name;
   );

   // or this, depending on readability and your preferences
   const hello = ({name}) => "Hello " + name;
   ```
   <http://es6-features.org/#ExpressionBodies>


8. Refresh index.html in your browser and make sure there are no errors.


## Part 2: Move to JSX syntax

JSX is an preprocessor step that adds XML syntax to JavaScript to make writing
React Components easier, so the changes are minimal and only effect React Components.
**Fundamentally, JSX provides syntactic sugar for `React.createElement`.**

1. Rewrite index.js using JSX syntax.

   [DO] Change this:
    ```js
    React.createElement(Tweeter)
    ```

   to this:
   ```js
   <Tweeter />
   ```

   Remember, the 1st parameter to `React.createElement` is the component or tag name.
   We are still telling React to create a React element for the `Tweeter` component.

2. Rewrite TweetBox.js using JSX syntax.

   [DO] As always, you must return a single React element from your component. So start
   by returning a single div. Like this:

   ```js
    return (
      <div>
      </div>
    );
   ```

   [DO] Now move the button element inside that div, using JSX syntax.

   ```js
    <input type="button" value="Tweet" />
   ```

   Remember, the 2nd parameter to `React.createElement` is the props, as a JavaScript
   object, that get passed into the component. In JSX, we specify those props
   using a syntax similar to HTML attributes. So, the syntax for JSX is basically:
   `<ComponentName prop1="value1" prop2="value2" ... />`.

   [DO] Finally, move the textarea element inside the div too, using JSX syntax.

   ```js
    <textarea placeholder="What's happening?" rows="5" cols="60" />
   ```

   [DO] Now the `TweetBox` component consists of a single return statement. Use the
   shorthand syntax as we did in Part 1, Step 7.

   Here is the completed `TweetBox` component:

   ```js
   const TweetBox = (props) => (
     <div>
       <textarea rows="5" cols="60" placeholder="What's happening?" />
       <input type="button" value="Tweet" />
     </div>
   );
   ```

   Notice how much shorter the component is now and how much it resembles plain HTML!

3. Rewrite Feed.js using JSX syntax.

   [DO] You can interpolate JavaScript variables as text by using curly braces.

   For example:

   ```js
   // this
   const Hello = ({name}) => React.createElement("span", null, name);

   // becomes this in JSX
   const Hello = ({name}) => <span>{name}</span>;
   ```

   A finished `Feed` component will look like this:

   ```js
   const Feed = ({tweets}) => (
     <ul>
       {tweets.map((tweet) => <li>{tweet}</li>)}
     </ul>
   );
   ```

4. Rewrite Tweeter.js using JSX syntax.

   When passing a JavaScript variable into another JSX component as a prop, use curly
   braces again.

   For example:

   ```js
   // given this Hello component...
   const Hello = ({name}) => <span>{name}</span>;

   // this
   const sayHiToMe = "Rebecca";
   React.createElement(Hello, {name: sayHiToMe});

   // becomes this
   const sayHiToMe = "Rebecca";
   <Hello name={sayHiToMe} />
   ```

   A finished `Tweeter` component will look like this:

  ```js
  const tweets = ["Hello I'm a tweet.", "Good morning"];

  const Tweeter = (props) => (
    <div>
      <TweetBox />
      <Feed tweets={tweets} />
    </div>
  );
  ```

5. Refresh index.html in your browser. <br/>
   **YOU WILL SEE AN ERRROR, KEEP READING, THE ERROR IS EXPECTED. :)**

   The app won't render anything, expectedly. Check the JavaScript console and you should see
   errors that looks like this: `Uncaught SyntaxError: Unexpected token <`

   This is because JSX is not an official part of JavaScript. It is a preprocessor
   step, and is not supported by any major browser at this time.

   This doubly reveals the need for a build step in our JavaScript application.

   First, now that we are writing our JavaScript using modern ES6 features, we lose support
   for the many older browsers that remain in use. Furthermore, as the ECMAScript
   standard advances, we will want to use new features as they become available, before
   any browsers support them (such as Object Rest/Spread, which becomes very useful
   in React apps).

   Second, now that we are writing our React components using JSX syntax, while
   gaining a much friendlier syntax, we lose support for all browsers.

   The solution is to introduce a build step that will compile your modern JavaScript
   into JavaScript that can be run by any browser.


## Part 3: Get Started with Babel

At this point, we start the transition from a collection of HTML and JavaScript files,
into an application in a more true sense of the word.

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

   Here is an example. The array-unique package has 1 file that returns an array
   free of duplicate values. It is 28 lines long, including comments!

3. Verify the Babel is installed and is executable.

   `$ ./node_modules/.bin/babel --help`

   Any node module that has an executable file will automatically be installed into
   `./node_modules/.bin`.

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

1. Install the "env" preset.

   `$ npm install babel-preset-env --save-dev`

   The "env" preset can configure Babel to transform JavaScript for a specified
   environment.

   Notice we do `--save-dev`again because a Babel preset is a development dependency.

   This will only download the node module, and now we need to tell Babel to use it.

2. Create a Babel configuration file.

   `$ touch .babelrc`

   [DO] Edit the .babelrc file as follows: (It uses JSON syntax)

   ```json
   {
     "presets": ["env"]
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

1. Try to compile index.js with Babel. <br/>
   **YOU WILL SEE AN ERRROR, KEEP READING, THE ERROR IS EXPECTED. :)**

   `$ ./node_modules/.bin/babel index.js`

   BOOM! You should see a syntax error similar to what you saw in the browser before:
   `SyntaxError: index.js: Unexpected token`

   The "env" preset only includes standard ECMAScript syntax and features, but JSX
   is not a standard part of the language. We will need to install and configure
   another preset to add support for JSX.

2. Install the Babel React preset.

   `$ npm install babel-preset-react --save-dev`

3. Add the React preset to the Babel configuration file.

   [DO] Edit .babelrc to add "react" to the list of presets

   ```json
   {
    "presets": ["env", "react"]
   }
   ```

4. Compile index.js with Babel.

   `$ ./node_modules/.bin/babel index.js`

   As you can see, the JSX syntax simply is transformed back into `React.createElement`, which
   is something the browser will be able to interpret.

   [DO] Try running Babel on the other JavaScript files and view the output.


## Part 6: Set up a compilation step for the project.

1. Create source code directory for better organization.

   ```sh
   $ mkdir src
   $ mv *.js src/
   ```

   We will leave index.html in the project root.

2. Create an npm script to do Babel compilation.

   [DO] Edit your package.json to add a "build" script.

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

   [DO] Open the index.js and TweetBox.js files in the "dist" folder and see the
   syntax that Babel output. This is optimized JavaScript.

   Note: You can run any configured script in your package.json with `npm run <command>`.
   Also, `npm run` will list out all the available scripts, including ones that come
   with npm.

4. Edit index.html to point to the compiled files.

   [DO] Here is what should be inside the &lt;body&gt; tag in index.html:

   ```html
   <div id="root"></div>

   <script type="text/javascript" src="dist/TweetBox.js"></script>
   <script type="text/javascript" src="dist/Feed.js"></script>
   <script type="text/javascript" src="dist/Tweeter.js"></script>
   <script type="text/javascript" src="dist/index.js"></script>
   ```

5. Refresh index.html in your browser.

   The app should be back to working again.


## Done!

Make a commit to save your progress! You will want to git ignore node_modules
and dist.


## Further Exploration:

* ECMASCript 6
  * Browser support: <https://kangax.github.io/compat-table/es6/>
  * Features docs and syntax: <http://es6-features.org/>
* JSX
  * Introducing JSX: <https://facebook.github.io/react/docs/introducing-jsx.html>
  * JSX In Depth: <https://facebook.github.io/react/docs/jsx-in-depth.html>
* Babel
  * CLI usage: <https://babeljs.io/docs/usage/cli/>
  * Babel presets list: <https://babeljs.io/docs/plugins/>
  * Why Babel Matters: <http://codemix.com/blog/why-babel-matters>
* npm
  * The package.json file: <https://docs.npmjs.com/files/package.json>
  * scripts: <https://docs.npmjs.com/misc/scripts>
