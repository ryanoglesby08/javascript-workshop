/*
<div>
  <textarea rows="5" cols="60" placeholder="What's happening?" />
  <input type="button" value="Tweet" />
</div>
*/

var TweetBox = function(props) {
  var tweetText = React.createElement("textarea", {rows: 5, cols: 60, placeholder: "What's happening?"});
  var tweetButton = React.createElement("input", {type: "button", value: "Tweet"});

  return React.createElement("div", null, [tweetText, tweetButton]);
};
