var TweetBox = function(props) {
  var tweetText = React.createElement("textarea", {rows: 5, cols: 60});
  var tweetButton = React.createElement("input", {type: "button", value: "Tweet"});

  return React.createElement("div", null, [tweetText, tweetButton]);
};
/*
  1. Create the component with props, but it will not get used yet.

    This function is a valid React component because it accepts a single "props" object argument with data and returns a React element.
    We call such components "functional" because they are literally JavaScript functions. Recommended.

    This is the core of building a React app, and the main concept to learn and master. React applications are built up of
    many independent components. Each ones knows only about itself and its direct children. Each component is responsible for its own
    state.

    - Every time I invoke the TweetBox "function" with the same input, I will get the same thing back, with no side effects (DOM)
    - input --> output
    - This makes these components extremely testable and easy to reason about.
*/

/*
<div>
  <textarea rows="5" cols="60" />
  <input type="button" value="Tweet" />
</div>
*/
