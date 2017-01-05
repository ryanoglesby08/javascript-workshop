const postTweet = (tweet) => {
  console.log(tweet)
};
// const: declare a block-scoped constant/immutable-variable. Cannot be re-assigned new content
// **** This is unlike the var keyword, which defines a variable globally, or locally to an entire function regardless of block scope

// () => : arrow function. More intuitive handling of `this` keyword.

const TweetBox = (props) => {
// const
  const {placeholder} = props;
  // destructuring: destructure the parameter into individual variables

  let tweetBox;
  // let: declare a block-scoped variable that can be re-asigned a value.

  const textArea = React.createElement("textarea", {
  // const
    placeholder, // short-hand object notation
    rows: 5,
    cols: 60,
    ref: (textareaInput) => {
    // arrow function
      tweetBox = textareaInput;
    }
  });
  const tweetButton = React.createElement("input", {
  // const
    type: "button",
    value: "Tweet",
    onClick: () => {
    // arrow function
        postTweet(tweetBox.value);
        tweetBox.value = "";
    }
  });

  return React.createElement("div", null, [textArea, tweetButton]);
};

/*
  In order for websites to take full advantage of these new JavaScript features, multiple browsers must support the latest
   specifications. Fortunately, cross-browser support has rapidly improved in the past few months.
   The latest development versions of all modern browsers now support more than 90% of ES6, with polyfills and transpilation
   available to add support to older browsers as well.

  Luckily, Chrome already has support for most ES6 features. But older browsers won't.

  Many more features to ES6, this is barely scratching the service.
*/
