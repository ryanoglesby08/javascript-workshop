var postTweet = function(tweet) {
  // 5. The value of the textarea is logged to the console.
  console.log(tweet);
};

/**
  Implementation of a React "Uncontrolled Component." See below for more info.

  The numbered steps outline the flow of the textarea's text value.
*/
var TweetBox = function(props) {
  var placeholder = props.placeholder;

  // 1. Declare a variable that will eventually be assigned the <textarea> DOM element
  var tweetInput;

  var handleClick = function() {
    // 4. Access the value of the textarea
    postTweet(tweetInput.value);
    tweetInput.value = "";
  };

  var tweetText = React.createElement("textarea", {
    placeholder: placeholder,
    rows: 5,
    cols: 60,
    ref: function(textareaElement) {
      // 2. When `tweetText` is mounted to the DOM, assign the actual DOM element as `tweetInput`
      tweetInput = textareaElement;
    }
  });
  var tweetButton = React.createElement("input", {
    type: "button",
    value: "Tweet",
    onClick: handleClick // 3. When `tweetButton` is clicked, invoke its `onClick` callback
  });

  return React.createElement("div", null, [tweetText, tweetButton]);
};

/*
  React supports a special attribute that you can attach to any component. The "ref"
  attribute takes a callback function, and the callback will be executed immediately after
  the component is mounted or unmounted.

  From the callback, we can get ahold of the actual DOM element being created and
  get/modify its attributes, such as value.

  This is necessary because "tweetText" is a React element, NOT a <textarea> input field.

  React refers to this pattern as an Uncontrolled Component, meaning that React does
  not control the state of the component.

  Using ref is totally acceptable for something small like this, but the advice is
  not to overuse it because it tightly couples you to the DOM. We will see another
  way of doing this later.

  https://facebook.github.io/react/docs/uncontrolled-components.html
  https://facebook.github.io/react/docs/refs-and-the-dom.html
*/
