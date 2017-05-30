var TweetBox = function(props) {
  var placeholder = props.placeholder;

  var handleClick = function() {
    console.log([tweetText.value, tweetText]); // Does not work...
    console.log(document.getElementById("tweetText").value); // Technically works, but no no!
  };

  var tweetText = React.createElement("textarea", {placeholder: placeholder, rows: 5, cols: 60, id: "tweetText"});
  var tweetButton = React.createElement("input", {
    type: "button",
    value: "Tweet",
    onClick: handleClick
  });

  return React.createElement("div", null, [tweetText, tweetButton]);
};

/*
  Want to add some behavior to this component. Clicking the button should post the tweet to the console.

  1. Create an empty function handleClick
  2. Add it as a prop to tweetButton
  3. How to access the value of the textarea.
    - Try using `tweetText.value`. Can't becuase `tweetText` is a React element and not an HTML input field
    - What about document.getElementById? Could work, but makes testing hard and violates core React principles.

  React has better ways. First, we are going to do an easy way.

  --> Share TweetBox.js
*/

/*
<div>
  <textarea placeholder="" rows="5" cols="60" />
  <input type="button" value="Tweet" />
</div>
*/
