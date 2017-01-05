import React from "react";

import TweetBox from "./TweetBox";
import Feed from "./Feed";

const appStyles = {
  height: "100%",
  width: "50%",
  marginLeft: "25%",
  paddingTop: "1rem",
  backgroundColor: "white",
  borderLeft: "1px solid #ccc",
  borderRight: "1px solid #ccc"
};

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
      <div style={appStyles}>
        <TweetBox placeholder="What's happening?" maxLength={140} postTweet={this.postTweet} />
        <Feed tweets={this.state.tweets}/>
      </div>
    );
  }
}

export default App;
