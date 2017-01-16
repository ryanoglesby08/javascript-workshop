This doc just captures short definitions of things and why they are a thing.

## What is ES6?
JavaScript is a continually evolving programming language standardized over time by a committee of browser vendors, developers, and community members. In the past two years, this committee has introduced ES6, the largest update in the history of JavaScript, and ES7, the first of more frequent annual releases. Together the two versions add hundreds of new features to help developers write expressive, concise, and fast applications.

## What makes up a modern JavaScript build pipeline?
A modern build pipeline typically consists of:

* A **package manager**, such as Yarn or npm. It lets you take advantage of a vast ecosystem of third-party packages, and easily install or update them.
* A **bundler**, such as webpack or Browserify. It lets you write modular code and bundle it together into small packages to optimize load time.
* A **compiler** such as Babel. It lets you write modern JavaScript code that still works in older browsers.

## What is webpack?


## What is Babel?
Babel is a JavaScript compiler. It has 3 stages (as do most compilers), 1) parse 2) transform and 3) generate. Out of the box, Babel would do a no-op on all files given to it. Transformations are added to Babel as plugins, which it calls presets. For example, given a preset of "es2015", Babel would be able to transform (compile) any ES2015 code into standard JavaScript that could be interpreted in the browser.

## What is React?
A JavaScript library for building user interfaces.
