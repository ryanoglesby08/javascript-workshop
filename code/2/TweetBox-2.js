var TweetBox = function(props) {
  var placeholder = props.placeholder;

  var tweetText = React.createElement("textarea", {placeholder: placeholder, rows: 5, cols: 60});
  var tweetButton = React.createElement("input", {type: "button", value: "Tweet"});

  return React.createElement("div", null, [tweetText, tweetButton]);
};
/*
  1. Add "placeholder" as a prop

    Props are main way of injecting data into a component. They are read-only.
    Note that the `props` argument is just a parameter name, technically it could be anything,
    but "props" is the convention and you should stick to that.

    Will get to mutable state later.

    When a component receives new props, it will lead to a re-render and eventually a UI update
*/

/*
<div>
  <textarea placeholder="pros.placeholder" rows="5" cols="60" />
  <input type="button" value="Tweet" />
</div>
*/
