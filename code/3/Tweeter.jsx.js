/*
<div>
  TweetBox
  Feed
</div>
*/

const tweets = ["Hello I'm a tweet.", "Good morning"];

const Tweeter = (props) => (
  <div>
    <TweetBox />
    <Feed tweets={tweets} />
  </div>
);
