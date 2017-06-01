/*
<div>
  TweetBox
  Feed
</div>
*/

const tweets = ["Hello I'm a tweet.", "Good morning"];

const Tweeter = (props) => {
  return React.createElement("div", null, [
    React.createElement(TweetBox),
    React.createElement(Feed, {tweets: tweets})
  ]);
};
