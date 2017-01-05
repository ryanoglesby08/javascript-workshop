History of JS
Web as print, pages
Age of jQuery
2 Way binding era
One way data flow time


mid-90s
- In the early-to-mid 1990s, most Web sites were based on complete HTML pages. Each user action required that a complete page be loaded from the server. This process was inefficient, as reflected by the user experience: all page content disappeared, then reappeared. Each time the browser reloaded a page because of a partial change, all of the content had to be re-sent, even though only some of the information had changed. This placed additional load on the server and made bandwidth the limiting factor on performance.

- client server architecture

JavaScript
- released in 1995
- Netscape Communications realized that the Web needed to become more dynamic
- "glue language" that was easy to use by Web designers and part-time programmers to assemble components such as images and plugins, where the code could be written directly in the Web page markup.
- extremely coupled to HTML markup, with event handlers right on the the HTML

late 90s -> early 2000s
- moving towards async
- iframe, XML HTTP request
- The term "Ajax" was publicly stated on 18 February 2005
- Google made a wide deployment of standards-compliant, cross browser Ajax with Gmail (2004) and Google Maps (2005).[9] In October 2004 Kayak.com's public beta release was among the first large-scale e-commerce uses of what their developers at that time called "the xml http thing"
- kayak.com - We wanted both a UI which was stripped down and simple (craigslist anyone?) but which also was fast. A key part of being fast was doing the xml http thing, so user refinements would not cause annoying page reloads.

jQuery
- 2006 - DOM manipulation library
- jQuery's syntax is designed to make it easier to navigate a document, select DOM elements, create animations, handle events, and develop Ajax applications.
- Thus, it encourages developers to completely separate JavaScript code from HTML markup.
- jQuery is the most popular JavaScript library in use today, with installation on 65% of the top 10 million highest-trafficked sites on the Web. (as of 2014/2015)
- JS is still more of a scripting language to manipulate HTML or load HTML asynchronously
- Elimination of cross-browser incompatibilities

- For larger applications, code became hard to maintain. Still have a high dependency on the DOM, making testing difficult. Does not promote any application conventions or patterns, so ending up with "jQuery speghetti" was common. No out-of-the-box way to model state. Required a lot of architecting and discipline.



node
- 2009
- open source JavaScript runtime environment


2-way data binding/ Time of the MV...s/ Birth of SPAs
- AngularJS in 2010 - MVC/MVVM (MVVM = Model View View-Model)
- Knockout in 2010 - MVVM
- Backbone in 2010 - MVP (Model View Presenter)
- Ember.js in 2011 - MVVM
- Jasmine in 2010 - unit Testing

- Enabled the Single Page app
- Now, devs are writing JavaScript applications

- for most of these, meant using either straight HTML or a templated language such as Handlebars and applying special mark-up or attributes. On load, the framework reads the HTML and bootstraps the app, usually doing data-binding
- 2-way data binding = is the automatic synchronization of data between the model and view components. The view is a projection of the model at all times. When the model changes, the view reflects the change, and vice versa.

- huge improvement. Real application frameworks. Could write a lot of application logic without needing the DOM, but gotta put markup on HTML that must be in sync, so hard to test that part. Gotta start up a browser and run tests in the browser. Separation of HTML and JS good, but must make sure they are in sync. Forced to put extra attributes all over your HTML markup.


Let there be components/1 way data flow
- React open sourced in 2013
- first deployed on Facebook's newsfeed in 2011 and later on Instagram.com in 2012

- Properties, a set of immutable values, are passed to a component's renderer as properties in its HTML tag. A component cannot directly modify any properties passed to it, but can be passed callback functions that do modify values. This mechanism's promise is expressed as "properties flow down; actions flow up".
- Another notable feature is the use of a "virtual DOM." React creates an in-memory data structure cache, computes the resulting differences, and then updates the browser's displayed DOM efficiently.[10] This allows the programmer to write code as if the entire page is rendered on each change while the React libraries only render subcomponents that actually change.

- Merging of HTML and JS and CSS
- Server side compilation and testing. Build process with tools such as webpack and browserify.
- Questioning old assumptions such as inline styles and separation of markup and JS

Popular ones Now
- React in 2013
- Vue in 2014
- Angular 2 in 2016?
--> All are based on components. But Angular and VUE still do the 2 way data-binding stuff


Future?
- Web Components?
