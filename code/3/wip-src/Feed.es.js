/*
<ul>
  <li>A tweet</li>
  <li>Another tweet</li>
</ul>
*/

const Feed = ({tweets}) => {
  const tweetList = tweets.map((tweet) => {
    return React.createElement("li", null, tweet);
  });

  return React.createElement("ul", null, tweetList);
};
