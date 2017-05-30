## Start

New directory
```
mkdir js-workshop
```
Every web page or web app needs 3 things: HTML, JS, and CSS. So we start with HTML.


## First, HTML

Create index.html

```html
<html>
  <head>
    <title>Yay React</title>
  </head>
  <body>
    Hello world
  </body>
</html>
```

Don't need a server yet. Web browser can just open any index.html file.

```
open index.html
```

## Add React

Add React - library for building user interfaces.
- http://unpkg.com (For getting npm packages easily)

Write a hello world using React.createElement.

```html
<html>
  <head>
    <title>Yay React</title>

    <script type="text/javascript" src="https://unpkg.com/react/dist/react.min.js"></script>
  </head>
  <body>
    <script type="text/javascript">
      // React.createElement(component|tag, props, children) --> Create and return a new React element
      React.createElement("div", {}, "Hello world.");
    </script>
  </body>
</html>
```

**You will NOT see anything render to the screen here!**

`React.createElement` only creates a new React element in memory, and now you can do things with it. It does not get rendered to the screen until to explicitly tell it to.

> React is decoupled from the DOM. This is the absolute core point of React. It uses a “virtual DOM”.

## Add ReactDOM

ReactDOM is the part that actually deals with the DOM. Render component using `ReactDOM.render`.

Why separate React and ReactDOM?
* Performance. React's virtual DOM is faster.
* DOM is browser specific, by separating them we can run React on a server (rendering or testing), can render to a phone, etc.

```html
<html>
  <head>
    <title>Yay React</title>

    <script type="text/javascript" src="https://unpkg.com/react/dist/react.min.js"></script>
    <script type="text/javascript" src="https://unpkg.com/react-dom/dist/react-dom.min.js"></script>
  </head>
  <body>
    <div id="root"></div>

    <script type="text/javascript">
      var helloWorldElement = React.createElement("div", {}, "Hello world.");

      // ReactDOM.render(component, container) --> Render a React element into the DOM in the supplied container
      ReactDOM.render(
        helloWorldElement,
        document.getElementById("root")
      );
    </script>
  </body>
</html>
```

This will likely be the only time in a React app where you do `document.getElementById()`


## Q & A

Q: Why <script> tags in head and at bottom?<br/>
A: In <head> blocks content from rendering, end of body does not. So we don't want anything else to happen until React is loaded, then we can execute the <script> tag in the body immediately.
