import React from "react";

import TweetBox from "./TweetBox";
import Feed from "./Feed";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
    this.postTweet = this.postTweet.bind(this);
  }

  postTweet(tweet) {
    this.setState({
      tweets: this.state.tweets.concat(tweet)
    });
  }

  render() {
    return (
      <div>
        <TweetBox placeholder="What's happening?" postTweet={this.postTweet} />
        <Feed tweets={this.state.tweets}/>
      </div>
    );
  }
}

export default App;


/*
  tweets is our state, and its a list. Pass it to the Feed.
  postTweet uses Array#concat, which returns a new list with the appended item without modifying the original list.
  webpack bundle will auto re-compile
*/
