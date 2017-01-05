/*
  JS modules

  - Each module is a piece of code that is executed once it is loaded.
  - ES6 modules are stored in files. There is exactly one module per file and one file per module.
  - Modules are singletons. Even if a module is imported multiple times, only a single “instance” of it exists.

  - Not yet fully supported by browsers.

  ** Not importing `document`, because that is an API that the browser must supply at runtime.
  ** We can declare that as global later.
*/

import ReactDOM from "react-dom";
// MUST import React anytime you write JSX code, even if writing a functional component
import React from "react";

import postTweet from "./postTweet";
import TweetBox from "./TweetBox";

ReactDOM.render(
  <TweetBox placeholder="What's happening?" postTweet={postTweet} />,
  document.getElementById("root")
);
