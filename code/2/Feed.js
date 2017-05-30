/*
<ul>
  <li>A tweet</li>
  <li>Another tweet</li>
</ul>
*/

var Feed = function(props) {
  var tweetList = props.tweets.map(function(tweet) {
    return React.createElement("li", null, tweet);
  });

  return React.createElement("ul", null, tweetList);
};
