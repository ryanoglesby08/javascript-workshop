import React from "react";

import TweetBox from "./TweetBox";
import Feed from "./Feed";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
    this.postTweet = this.postTweet.bind(this);
  }

  postTweet(tweet) {

  }

  render() {
    return (
      <div>
        <TweetBox placeholder="What's happening?" postTweet={} />
        <Feed tweets={}/>
      </div>
    );
  }
}

export default App;
