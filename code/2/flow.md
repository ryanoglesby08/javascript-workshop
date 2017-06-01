## Thinking in components

The first step is to break the UI up into a component hierarchy. Draw logical boxes around each component and give them names.

But how do you know what should be its own component? Just use the same techniques for deciding if you should create a new function or object. One such technique is the single responsibility principle, that is, a component should ideally only do one thing. If it ends up growing, it should be decomposed into smaller subcomponents.

_Draw image of UI with TweetBox, Feed, and Tweeter as components._

Tweeter responsibility: Contain the entire app
TweetBox responsibility: Accept a new tweet from the user
Feed responsibility: Display a list of tweets.


## Introduce TweetBox component

Let's start with the TweetBox.

Create new file, TweetBox.js. (See TweetBox.js for code)

Use PascalCase. Convention for React components.

This function is a valid React component because it accepts a single "props" object argument with data and returns a single React element. We call such components "functional components" because they are literally JavaScript functions. Recommended.

We are not using props yet though here. You can think of props as the "input" for the component.

```html
<script type="text/javascript" src="TweetBox.js"></script>
<script type="text/javascript">
  ReactDOM.render(
    React.createElement(TweetBox),
    document.getElementById("root")
  );
</script>
```

Next, let's move onto the Feed component, which will have some input.


## Introduce Feed component

Create new file, Feed.js. (See Feed.js for code)

Feed has props now, and it is an array of strings representing the tweets in the system. These might be coming in from an API call or something.

Right now in index.html we are only rendering `TweetBox` but we want to render both now. `ReactDOM.render` can only render a single element, so this is where the Tweeter component comes in.


## Introduce Tweeter component

Create new file, Tweeter.js. (See Tweeter.js for code)

Pass the list of tweets into `Feed` here as the `tweets` prop.

```html
<script type="text/javascript" src="TweetBox.js"></script>
<script type="text/javascript" src="Feed.js"></script>
<script type="text/javascript" src="Tweeter.js"></script>
<script type="text/javascript">
  ReactDOM.render(
    React.createElement(Tweeter),
    document.getElementById("root")
  );
</script>
```

## Everything is static

Right now, you will notice that everything is static. While you can type into the textarea and click the button, nothing happens. We have not implemented any behavior yet. This is fine and often recommended, as this allows us to see the structure of our app and start to get a hang of where things go. 

Don't worry, we will add behavior soon, but not yet...

## Next... focus on tooling

Now that we have some components, there are some obvious downsides here.

1. We are using comments in our components to help us imagine their structure. `React.createElement` is pretty verbose and a bit unnatural.
2. We are writing "vanilla JS", which means we can't use many modern language features.

(There are other downsides, but these are the first ones we will focus on.)

React advices against writing apps like this for these reasons. And introduced a syntax to make this better.

So, next section introduces a newer version of the JS language, called ES6, & JSX, & Babel.
