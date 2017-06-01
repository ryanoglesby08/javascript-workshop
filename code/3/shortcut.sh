#!/usr/bin/env bash

set -ev

mkdir src
curl -s https://raw.githubusercontent.com/ryanoglesby08/javascript-workshop/master/code/3/src/Feed.js -o src/Feed.js
curl -s https://raw.githubusercontent.com/ryanoglesby08/javascript-workshop/master/code/3/src/index.js -o src/index.js
curl -s https://raw.githubusercontent.com/ryanoglesby08/javascript-workshop/master/code/3/src/TweetBox.js -o src/TweetBox.js
curl -s https://raw.githubusercontent.com/ryanoglesby08/javascript-workshop/master/code/3/src/Tweeter.js -o src/Tweeter.js

curl -s https://raw.githubusercontent.com/ryanoglesby08/javascript-workshop/master/code/3/.babelrc -o .babelrc
curl -s https://raw.githubusercontent.com/ryanoglesby08/javascript-workshop/master/code/3/index.html -o index.html

curl -s https://raw.githubusercontent.com/ryanoglesby08/javascript-workshop/master/code/3/package.json -o package.json

npm install
npm run build

open index.html

echo "Done!"
