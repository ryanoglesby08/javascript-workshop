"use strict";

var postTweet = function postTweet(tweet) {
  console.log(tweet);
};

var TweetBox = function TweetBox(_ref) {
  var placeholder = _ref.placeholder;

  var tweetBox = void 0;

  var handleClick = function handleClick() {
    postTweet(tweetBox.value);
    tweetBox.value = "";
  };

  return (
    // This part is JSX!
    React.createElement(
      "div",
      null,
      React.createElement("textarea", { placeholder: placeholder, rows: "5", cols: "60", ref: function ref(textareaInput) {
          return tweetBox = textareaInput;
        } }),
      React.createElement("input", { type: "button", value: "Tweet", onClick: handleClick })
    )
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