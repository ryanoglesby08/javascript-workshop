var postTweet = function(tweet) {
  console.log(tweet);
};

var TweetBox = function(props) {
  var placeholder = props.placeholder;
  var tweetInput;

  var tweetText = React.createElement("textarea", {
    placeholder: placeholder,
    rows: 5,
    cols: 60,
    ref: function(textareaElement) {
      tweetInput = textareaElement;
    }
  });
  var tweetButton = React.createElement("input", {
    type: "button",
    value: "Tweet",
    onClick: function() {
        postTweet(tweetInput.value);
        tweetInput.value = "";
    }
  });

  return React.createElement("div", null, [tweetText, tweetButton]);
};
/*
  1. add onClick handler to the button and create postTweet function. Here, we need to have access to the tweet text to post it.
      - Can't use `tweetText.value` becuase `tweetText` is a React element and not an HTML input field
      - Can show document.getElementById here and why we don't do that
  2. Add the ref to textArea
  3. Set the tweetBox back to empty after postTweet

    ref: React supports a special attribute that you can attach to any component. The ref attribute takes a callback function,
     and the callback will be executed immediately after the component is mounted or unmounted.
    - From the callback, we can get ahold of the actual DOM element being created and get/modify its attributes, such as value
    - This is necessary because "tweetText" is a React element, NOT a <textarea> input field
      (can demonstrate using console.log inside of the ref callback)

    - React refers to this pattern as an Uncontrolled Component
    - Using ref is totally acceptable for something small like this, but the advice is not to overuse it.
      It Tightly couples you to the DOM. We will see another way of doing this later.
    - Share these:
      https://facebook.github.io/react/docs/uncontrolled-components.html
      https://facebook.github.io/react/docs/refs-and-the-dom.html

    ** "Warning: Each child in an array or iterator should have a unique "key" prop." -- ignore this for now **
*/

/*
<div>
  <textarea placeholder="" rows="5" cols="60" />
  <input type="button" value="Tweet" />
</div>
*/
