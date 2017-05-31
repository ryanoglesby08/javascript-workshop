const postTweet = (tweet) => {
  console.log(tweet);
};

const TweetBox = ({placeholder}) => {
  let tweetBox;

  const handleClick = () => {
    postTweet(tweetBox.value);
    tweetBox.value = "";
  };

  return (
    // This part is JSX!
    <div>
      <textarea placeholder={placeholder} rows="5" cols="60" ref={(textareaInput) => tweetBox = textareaInput} />
      <input type="button" value="Tweet" onClick={handleClick} />
    </div>
  );
};

/*
  JSX:
    - JSX is a preprocessor step that adds XML syntax to JavaScript
    - Fundamentally, JSX provides syntactic sugar for React.createElement
    - This is the part that tends to confuse people. Yes, write HTML in JavaScript! Have to keep your contexts straight, know "Am I writing
      HTML syntax right now, or JS syntax?"

    Remember, not actually touching the DOM at this point.

  1. Use JSX syntax.
  2. Open in browser. Error.
  3. Talk about why. Browsers don't support JSX syntax.... yet.
  4. Introduce Babel.

  Babel:
    - a JavaScript compiler
    - Can transform ES6/7/JSX code into JavaScript that all browsers can understand

  5. Jump to command line
*/
