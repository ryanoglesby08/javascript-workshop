/*
<div>
  <textarea rows="5" cols="60" placeholder="What's happening?" />
  <input type="button" value="Tweet" />
</div>
*/

const TweetBox = (props) => {
  const tweetText = React.createElement("textarea", {rows: 5, cols: 60, placeholder: "What's happening?"});
  const tweetButton = React.createElement("input", {type: "button", value: "Tweet"});

  return React.createElement("div", null, [tweetText, tweetButton]);
};
