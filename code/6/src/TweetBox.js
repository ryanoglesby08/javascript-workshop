import React from "react";

class TweetBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweet: ""
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
    const {placeholder} = this.props;

    return (
      <div>
        <textarea placeholder={placeholder} value={this.state.tweet} rows="5" cols="60" onChange={this.handleChange} />

        <div>
          <span>{this.state.tweet.length}</span>
          <input type="button" value="Tweet" onClick={this.handleSubmit} />
        </div>
      </div>
    );
  }
};

export default TweetBox;
