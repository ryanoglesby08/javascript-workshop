import React from "react";

import postTweet from "./postTweet";
import TweetBox from "./TweetBox";
import Feed from "./Feed";

const App = () => (
  <div>
    <TweetBox placeholder="What's happening?" postTweet={postTweet} />
    <Feed tweets={["test tweet", "and another one"]}/>
  </div>
);

export default App;


/*
  - initial implementation of App as stateless
  - use dummy tweets to show that it works
  - this is a stateless component, so it can only take in props and return some html
  - notice that now our bundle has re-compiled and the page has refreshed
*/
