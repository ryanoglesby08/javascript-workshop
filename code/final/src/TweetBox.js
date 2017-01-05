import React from "react";

import TweetLength from "./TweetLength";

const tweetBoxStyles = {
  padding: "0 1rem"
};

const textAreaStyles = {
  width: "100%",
  padding: 10,
  border: "1px solid #ccc",
  borderRadius: 5,
  fontSize: "1rem"
};

const tweetBarStyles = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginTop: "0.5rem"
};

const tweetButtonStyles = {
  base: {
    marginLeft: "auto",
    minWidth: 100,
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#2AA3EF",
    border: "1px solid #2AA3EF",
    cursor: "pointer",
    color: "white",
    fontSize: "1rem"
  },
  disabled: {
    backgroundColor: "#ccc",
    border: "1px solid #ccc",
    cursor: "default"
  }
};

const isTweetLengthWithinRange = (remainingCharacters, maxLength) => remainingCharacters >= 0 && remainingCharacters < maxLength;

class TweetBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweet: "",
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      tweet: event.target.value
    });
  }

  handleSubmit() {
    const {postTweet} = this.props;

    postTweet(this.state.tweet);
    this.setState({
      tweet: ""
    });
  }

  render() {
    const {placeholder, maxLength} = this.props;
    const remainingCharacters = maxLength - this.state.tweet.length;

    const canTweet = isTweetLengthWithinRange(remainingCharacters, maxLength);

    const buttonStyles = Object.assign({},
      tweetButtonStyles.base,
      !canTweet && tweetButtonStyles.disabled
    );

    return (
      <div style={tweetBoxStyles}>
        <textarea placeholder={placeholder} value={this.state.tweet} rows="5" cols="60" style={textAreaStyles} onChange={this.handleChange} />

        <div style={tweetBarStyles}>
          <TweetLength remaining={remainingCharacters} />
          <input type="button" value="Tweet" style={buttonStyles} disabled={!canTweet} onClick={this.handleSubmit} />
        </div>
      </div>
    );
  }
};

export default TweetBox;
