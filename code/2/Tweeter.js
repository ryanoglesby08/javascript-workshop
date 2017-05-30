/*
<div>
  TweetBox
  Feed
</div>
*/

var tweets = ["Hello I'm a tweet.", "Good morning"];

var Tweeter = function(props) {
  return React.createElement("div", null, [
    React.createElement(TweetBox),
    React.createElement(Feed, {tweets: tweets})
  ]);
};
