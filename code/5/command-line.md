1. `npm install webpack --save-dev`
2. Download webpack.config.js
3. Edit webpack.config.js
4. `npm install babel-loader --save-dev`
5. `./node_modules/.bin/webpack`
  --> This created our entire application as a single JavaScript file
  - webpack can handle other types too, for now we only have JS
  - ** Can delete other files in dist
6. Open dist/application.bundle.js in editor
  --> Notice how small it is, top has some webpack stuff, then at the bottom is our index.js
  - its supposed to be the entire application
  - webpack creates a graph of all of your application's dependencies, but we have not declared any
  - so let's do that first
7. Add imports and exports to JS files
  A) index.js - imports
  B) TweetBox.js - imports and export
8. `npm install react react-dom --save`
  --> save these as runtime dependencies
9. `./node_modules/.bin/webpack`
  --> Notice the new size of the bundle, its much bigger now!
  - may not want to try to open it in your editor....
10. Edit index.html to point to new application bundle and open in browser!

11. Edit package.json
```
  "scripts": {
    "build": "webpack --progress --colors",
    "build:watch": "npm run build -- --watch",
```
12. `npm run build:watch`
