/* ************* Functional Thinking in JavaScript ************* */

/*
  This guided exercise is devided into 6 sections. The comments guide you through each section,
  and each one builds on the previous ones. The comments marked with a TODO
  indicate that you have something to type.

  Paste this entire file into a JavaScript REPL such as http://www.jsbin.com or
  http://www.jsfiddle.net and go through the sections, implementing and uncomments
  things as needed.

  Have fun!
*/







/* 1. ************* FUNCTIONS *************** */


/*
 `addThings` is a function that accepts two parameters, `x` and `y` and returns
    the result of the `+` operation. Notice that we do not declare types for the
    parameters.
*/
function addThings(x, y) {
  return x + y;
}

/*
  The `var` statement declares a variable, and we assign the value returned from
    the `add` function.
  Since we are not declaring any types, what will happen if you pass in other
    parameters into `addThings`, such as strings, or arrays, or a string and a number?
*/
var sum = addThings(2, 3);

/*
  `console.log` prints to the JavaScript console.
  In Google Chrome, you can access the console by pressing "option + command + j".
  You can type JavaScript statements directly into the console on any web page
    and see the results immediately.
  This article has some cool examples of things you can do:
    --> https://hackernoon.com/what-you-dont-know-about-web-development-d7d631f5d468#.cqralnrbs
*/
console.log(sum);








/* 2. *************** FUNCTIONS AS VARIABLES *************** */

/*
  In part 1, we declared the function differently than the `sum` variable. In
  JavaScript, we must shift our thinking a bit. A function can be used just like
  strings or integers or arrays. So let's assign it as a variable too.
*/
var add = function(x, y) {
  return x + y;
}

// TODO: Invoke the `add` function and print the result to the console.








/* 3. *************** FUNCTIONS AS PARAMETERS *************** */

/*
  So, functions are variables just like strings or numbers, which means they can
  be used as arguments to other functions.
*/

var calculate = function(operation, x, y) {
  return operation(x, y);
};

// TODO: Invoke the calculate function with 3 arguments, in order to add 2 numbers
//  together. The first one should be a function. Then print the result to the console.

// sum = calculate(   insert 3 arguments here...   );

// TODO: Write another function called `multiply` that accepts 2 arguments and
//  returns their product. Invoke the `calculate` function to perform
//  the calculation. Then print the result to the console.







/* 4. *************** FUNCTIONS AS RETURN VALUES *************** */

/*
  Ok, cool, so functions are variables, they can be used as arguments to other
  functions. They can also be used as return values. A function can return
  another function, that can be saved and called later.
*/

var createAdder = function(numberToAdd) {
  // TODO: Instead of null, assign the variable `adderFunction` to a function that
  //  accepts a single parameter, `x`, and returns the result of adding `x` and `numberToAdd`
  var adderFunction = null;

  return adderFunction;
}

var addTwoTo = createAdder(2);
// TODO: Uncomment me to see the example usage. :)    console.log(addTwoTo(5));


// TODO: Create an adder with 3 as `numberToAdd`. Then use it to add 3 to another
//  number and print the result to the console.







/* 5. *************** FUNCTIONS AS ARRAY TRANSFORMATIONS *************** */

/*
  JavaScript uses functions to make your code more expressive. One common example
  of this comes with array operations and transformations. Map and Reduce are functional
  concepts that are present in other languages, and even in Java 8 streams.
*/

var numbers = [1, 4, 9, 16];

/*
  We want to multiply every element in this array by 2.

  First, let's look at how we might approach this in a non-functional way.
*/

/*
  TODO: Implement this for loop to iterate through the numbers array and multiply
    each element by 2. Then print the result to the console.
    Hint: For loops in JavaScript are identical to for loops in Java. Look here
      for an example: http://www.w3schools.com/js/js_loop_for.asp
*/
// for(;;) { }

/*
  The above code has a few deficiencies. First, we are changing, or mutating,
    the value of the `numbers` array. Second, the for loop we wrote has a lot of
    "noise", we may have introduced an intermediate variable to hold the index,
    and most of the code we wrote was about iteration, and not about the transformation
    we wanted to perform.

  The operation we are performing is called a mapping, or map for short. Javascript arrays
    have a method called `map` for just this purpose. The `map` method accepts a single
    parameter, a callback function, that will be invoked with each element in the array.
    A new array is constructed from the return values. The original array is unchanged.

  More docs for Array#map: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Map#Syntax
    (Warning, spoilers in there...)
*/

numbers = [1, 4, 9, 16];

/*
  TODO: Create a mapping function that will multiply it's argument by 2. You might
    try creating a new function here, or try using the functions you have already created.
    Then print the result to the console. Also print the `numbers` array to the console
    to verify that it remains unchanged.
*/

// var doubles = numbers.map(    insert mapping function here...    );

/*
  TODO: `Math.sqrt` is a function that will return the square root of a number.
    Math.sqrt(144) will return 12. Use this to create an array of the square roots
    of the elements of the `numbers` array. Then print the result to the console.
*/



numbers = [1, 2, 3, 4, 5];

/*
  Next, let's find the sum of a list of numbers.

  Again, let's look at how we might approach this in a non-functional way.
*/

/*
  TODO: Write a for loop to iterate through the numbers array and find the sum
    of all the elements. You may want another variable to hold the sum. Then print
    the result to the console.

    Hint: For loops in JavaScript are identical to for loops in Java. Look here
      for an example: http://www.w3schools.com/js/js_loop_for.asp
*/




/*
  This approach has many of the same deficiencies as before.

  This operation is called a reduction, because we are reducing a collection of
    values into a single value. JavaScript arrays have a method called `reduce`.
    The `reduce` method accepts 2 arguments, a callback function that will be invoked
    with each element in the array, and an initial value for the reduction.

  More docs for Array#reduce: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce#Syntax
    (Warning, spoilers in there...)
*/

/*
  TODO: Create a reducing function that will multiply add its two arguments. You might
    try creating a new function here, or try using the functions you have already created.
    Then print the result to the console. Also print the `numbers` array to the console
    to verify that it remains unchanged.
*/

// sum = numbers.map(    insert reducing function here...    , 0);


/*
  TODO: Use functions you have already created and the numbers array to find
    the factorial of 5. (5 * 4 * 3 * 2 * 1). Print the result to the console.
*/







/* 6. *************** CHALLENGE! *************** */

/*
  Now its all up to you! Let's look at functions when applied to a more "real world" scenario.

  You are building an application that deals with employee records. The `employee`
    array contains employee objects that were just fetched from your API, and you need
    to do some logic with them.
*/

var employees = [
  {id: 1, name: "Patti", tenure: 24.8},
  {id: 2, name: "Roy", tenure: 23.5},
  {id: 3, name: "Craig", tenure: 10.6},
  {id: 4, name: "Rebecca", tenure: 17.1}
];

/*
  TODO:

  NEWB: You need to display only the employee names.
    ==> Extract only the names from the objects.
    * With JavaScript objects, you can access a property using dot notation: `objectName.propertyName`

  NOVICE: You need to be able to access a specific employee by their id.
    ==> Reduce the array into a JavaScript object, where the keys are the ids,
        and the values are the {id, name, tenure} objects

  PRO: You need to find the total amount of tenure of all the employees who have more than 20 years of experience
    * No if statements allowed! :)
    * The `Array#filter` method may come in hany here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Filter
*/


console.log("Done!");
