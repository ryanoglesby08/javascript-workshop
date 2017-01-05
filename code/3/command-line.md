1. `npm init`
  --> Interactively create a package.json file. Package.json file describes your project/package.
  - Often, this would be your 1st step when starting a new front-end project
  - Look through the package.json
2. `npm install babel-cli --save-dev`
  --> Install a dependency named babel-cli and save it in the package.json as a development dependency.
  - Will add babel-cli to node_modules for this project, and add a a line to devDependencies for babel-cli
  - 2 types of dependencies, dev and runtime. Dev is things like test libraries, linters, pre-compilation steps, etc
3. `./node_modules/.bin/babel --help`
  --> Show help for babel to ensure it is installed
  - ./node_modules/.bin is where all local packages install any executables
4. `echo "[1,2,3].map((n) => n+1);" > test.js`
  --> Create a simple ES6 file to test out the Babel compilation
5. `./node_modules/.bin/babel test.js`
  --> Nothing happens... Why?
  - Babel is a 3-stage compiler (parse, transform, generate), like many others. Transformations are architected as a plugin system.
    Without any plugins, its basically a parse -> generate.
6. `npm install babel-preset-latest --save-dev`
  --> Installs a babel plugin, or "preset". This one is "latest", which means "give me all the latest yearly language updates"
7. `touch .babelrc`
  ```json
  {
    "presets": ["latest"]
  }
  ```
  --> .babelrc is the configuration file for Babel. Could also put this in package.json. More conventional to go in .babelrc
  - Declare we want to use the "latest" preset
8. `./node_modules/.bin/babel test.js`
  --> Now, try this again. And viola!
9. `rm test.js`
  --> Don't need this anymore
10. `./node_modules/.bin/babel index.js`
  --> Error! :( Still need to add support for JSX to Babel
11. `npm install babel-preset-react --save-dev`
  --> Install the React preset, with support for JSX
12. Edit .babelrc
  ```json
  {
    "presets": ["latest", "react"]
  }
  ```
13. `./node_modules/.bin/babel index.js`
  --> Viola!
  --> Notice it compiled it into what we used to have before we rewrote it in JSX
14. Now need to set up compilation for all files.
15. Edit package.json
  ```
  "scripts": {
    "build": "babel src/ -d dist/",
  ```
  --> Add an npm script to compile all files in src directory to dist directory
  --> "build" is arbitrary.
  --> "src" and "dist" are just conventions, have also seen "app" or "public"
15. Create src/ and dist/ directories. Move files into src/.
16. `npm run build`
17. Edit index.html to point to our new files.
17. `open index.html`
