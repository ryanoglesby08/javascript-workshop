/*
  Not importing console here because it is an API that will be provided by the browsers

  Why extract this? Separation of concerns, may want to post to an API. Pull HTTP requests
  out of the component. Component does not need to know HOW the tweet is posted.
*/
const postTweet = (tweet) => {
  console.log(tweet);
};

export default postTweet;
