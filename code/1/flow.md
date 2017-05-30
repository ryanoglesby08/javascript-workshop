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

## JavaScript and ES6

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
> React is decoupled from the DOM. This is the absolute core point of React. It uses a “virtual DOM”.

Add React DOM - this is the part that actually deals with the DOM.
Render component using ReactDOM.render
—> This is why we can render to any target such as Native for phones.
-> This allows you to use React along side other technologies. This may work for a legacy app.

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

Q: Why <script> tags in head and at bottom?
A: In <head> blocks content from rendering, end of body does not. So we don't want anything else to happen until React is loaded, then we can execute the <script> tag in the body immediately.
