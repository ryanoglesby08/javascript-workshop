/*
  In this module we have converted the TweetBox Component to an ES6 class that
  extends from React.Component so that it can inherit some methods that provide
  a small, strict API for managing state changes within React apps.

  This implementation is superior to the previous version of TweetBox, which used
  `ref`. That version is more similar to an older style of JavaScript that relies
  on DOM elements for storing state. This style gives us more control and a better
  separation of state and UI.

  The implementation below is unfinished. There are a few TODOs below that you must
  finish in order to complete this module.

  At any time, you can use the npm scripts we wrote in the last module to re-compile
  the app to check your syntax, and then refresh the browser to see changes.

  You may prefer to make a copy of this file and then remove all the comments from
  one of the copies to unclutter it a bit.
*/


const postTweet = (tweet) => {
  console.log(tweet);
};

/**
  All React components should begin as pure functional components like the previous
  version of TweetBox. Only when a component needs to modify its own state should
  it be converted to an ES6 class extending from React.Component.

  Notice that even though the TweetBox contains the `placeholder` prop, it is never
  mutated from within the component. It should remain a prop and should NOT be added
  to the mutable state.

  You should ALWAYS prefer props over mutable state. Most of your app should be
  controlled via props passed into components.

  - API for React Components
    https://facebook.github.io/react/docs/react-component.html

  - Best practices for using form fields in React
    http://goshakkk.name/controlled-vs-uncontrolled-inputs-react/
    https://facebook.github.io/react/docs/forms.html#controlled-components
*/
class TweetBox extends React.Component {
  constructor(props) {
    super(props);

    /*
      `this.state` is the the private, mutable state of this component.

      Here, the state of the component is represented by a single JavaScript object.
      The value `tweet` key is the mutable value of the textarea, representing the
      text of the tweet. Initialliy it is an empty string.
    */
    this.state = {
      tweet: ""
    };

    /*
      This part is a small JavaScript oddity with out the `this` keyword is handled with
      React and ES6 classes.

      It is a bit confusing and I wouldn't worry too much about this part.

      http://egorsmirnov.me/2015/08/16/react-and-es6-part3.html
    */
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
    Callback when the textarea's value is changed.
  */
  handleChange(event) {
    /*
      When invoked, `event.target.value` is the current value of the textarea. We
      need to modify the component's state here, which will eventually lead to a
      re-render and a UI update.

      API docs and example: https://facebook.github.io/react/docs/react-component.html#setstate

      TODO: Use `this.setState({tweet: <new value>});` to change the state of the component.
    */
  }

  /**
    Callback when the Tweet button is clicked.
  */
  handleSubmit() {
    /*
      When invoked, we need to post the tweet and reset the component's state back
      to empty so the textarea field is cleared.

      TODO: First, call the `postTweet` function, passing the current tweet state
        as the argument. You are allowed to get the state value using `this.state.tweet`

      TODO: Second, reset the tweet text back to empty string using `this.setState(<new state>)`
    */
  }

  /**
    React.Component's render method. Returns a single React element.

    https://facebook.github.io/react/docs/react-component.html#render
  */
  render() {
    /*
     We are now using ES6 Destructuring Assignment syntax to destructure the props
     into individual variables.
    */
    const {placeholder} = this.props;

    return (
      <div>
        {/* The textarea's value comes from the component's current state every time the component is rendered. */}
        <textarea placeholder={placeholder} value={this.state.tweet} rows="5" cols="60" onChange={this.handleChange} />

        <div>
          {
            /*
              TODO: Render the character count (length) of the current tweet state here

              In JSX, you can interpolate JavaScript by using curly braces.
              For example:
              const hello = (name) => {
                  return <p>Hello {name}!</p>;
              };
            */
          }

          <input type="button" value="Tweet" onClick={this.handleSubmit} />
        </div>
      </div>
    );
  }
};
