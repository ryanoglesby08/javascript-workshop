const postTweet = (tweet) => {
  console.log(tweet);
};

/**
  TweetBox Component written as an ES6 Class.

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
    this.state = {
      tweet: "" // The managed value of the textarea, representing the text of the tweet
    }
    /*
      `this.state` is the the private, mutable state of this component.
      Only values that are used in `render()` should be kept in `this.state`. Other
      variables could be just plain instance variables.
    */

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      tweet: event.target.value
    });
    /*
      TODO: Callback when the textarea's value is changed.
      When invoked, `event.target.value` is the value of the textarea. We need to modify the component's
       state here, which will eventually lead to a re-render and a UI update.
    */
  }

  handleSubmit() {
    postTweet(this.state.tweet);
    this.setState({
      tweet: ""
    });
    /*
      TODO: Callback when the Tweet button is clicked.
      When invoked, we can access the current state of the component. We need to call `postTweet`
       and then reset the comonent's state.
    */
  }

  render() {
    const {placeholder} = this.props;
    // Destructure the props into individual variables

    return (
      <div>
        <textarea placeholder={placeholder} value={this.state.tweet} rows="5" cols="60" onChange={this.handleChange} />

        <div>
          {/* TODO: Render the character count of the tweet here */}
          <span>{this.state.tweet.length}</span>
          <input type="button" value="Tweet" onClick={this.handleSubmit} />
        </div>
      </div>
    );
  }
};
