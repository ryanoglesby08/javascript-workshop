/* ************* Functional Thinking in JavaScript ************* */

/*
  This guided exercise is devided into 6 sections. The comments guide you through
  each section, and each one builds on the previous ones. The comments marked with
  a TODO indicate that you have something to type.

  Paste this entire file into a JavaScript REPL such as http://www.jsbin.com or
  http://www.jsfiddle.net and follow the instructions below, implementing and
  uncommenting things as needed.
  I prefer jsbin.com becuase it has a "console" tab that you can keep open. With
  jsfiddle.net you will need to open your browser's Developer Tools JavaScript console
  to see output during these exercises.

  Have fun!
*/







/* 1. ************* FUNCTIONS *************** */


/*
 `addThings` is a function that accepts two parameters, `x` and `y` and returns
    the result of the `+` operation. Notice that we do not declare types for the
    parameters or the return value of the function.
*/
function addThings(x, y) {
  return x + y;
}

/*
  The `var` statement declares a variable with a name of `sum`, and we assign
    the value returned from the `addThings` function to it.
  Since we are not declaring any types, what will happen if you invoke the `addThings`
    function with paramters that are not numbers, such as strings, or arrays,
    or a string and a number? TODO: Try it and find out!
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
  In part 1, we declared the function differently than the `sum` variable. But, in
  JavaScript we must shift our thinking a bit. A function can be used just like
  strings or integers or arrays. So let's assign it as a variable too.
*/
var add = function(x, y) {
  return x + y;
};

// TODO: Invoke the `add` function and print the result to the console.

sum = add(2, 8);
console.log(sum);






/* 3. *************** FUNCTIONS AS PARAMETERS *************** */

/*
  So, functions are variables just like strings or numbers, which means they can
  be used as arguments to other functions.

  Here, the first argument to the `calculate` function is another function called
    `operation`. In this case, we must pass in a function for `operation`, otherwise
    we will get a runtime exception.
*/

var calculate = function(operation, x, y) {
  return operation(x, y);
};

// TODO: Invoke the calculate function with 3 arguments, in order to add 2 numbers
//  together. The first one should be a function. Then print the result to the console.

sum = calculate(add, 3, 6);
console.log(sum);

// TODO: Write another function called `multiply` that accepts 2 arguments and
//  returns their product. Invoke the `calculate` function to perform
//  the muliplication. Then print the result to the console.

var multiply = function(x, y) {
  return x * y;
};

var product = calculate(multiply, 3, 6);
console.log(product);





/* 4. *************** FUNCTIONS AS RETURN VALUES *************** */

/*
  Ok, cool, so functions are variables, and they can be used as arguments to other
  functions. They can also be used as return values. A function can return
  another function, that can be saved and called later.
*/

var createAdder = function(numberToAdd) {
  // TODO: Instead of null, assign the variable `adderFunction` to a function that
  //  accepts a single parameter, `x`, and returns the result of adding `x` and `numberToAdd`
  var adderFunction = function(x) {
    return add(x, numberToAdd);
  };

  return adderFunction;
};

var addTwoTo = createAdder(2);
// TODO: Uncomment me to see the example usage.
console.log(addTwoTo(5));


// TODO: Create an adder with 3 as the `numberToAdd`. Then use it to add 3 to another
//  number and print the result to the console.
var addThreeTo = createAdder(3);
console.log(addThreeTo(5));






/* 5. *************** FUNCTIONS AS ARRAY TRANSFORMATIONS *************** */

/*
  JavaScript uses functions to make your code more expressive. One common example
  of this comes with array operations and transformations. Map and Reduce are functional
  tools present in other languages, and even in Java 8 streams.
*/

var numbers = [1, 4, 9, 16];

/*
  We want to multiply every element in this array by 2.

  First, let's look at how we might approach this in a non-functional way.
*/

/*
  TODO: Finish the for loop below to iterate through the numbers array and multiply
    each element by 2. Then print the result to the console.
    Hint: For loops in JavaScript are identical to for loops in Java. Look here
      for an example: http://www.w3schools.com/js/js_loop_for.asp
*/

for(var i = 0; i < numbers.length; i++) {
  numbers[i] *= 2;
}
console.log(numbers);

/*
  The for loop has a few deficiencies. First, we are likely changing, or mutating,
    the value of the `numbers` array. Second, the for loop we wrote has a lot of
    "noise", we may have introduced an intermediate variable to hold the index,
    and most of the code we wrote was about iteration, and not about the transformation
    we wanted to perform. Our code focuses more on the 'how', than on the 'what.'

  The operation we are performing is called a mapping, or map for short. Javascript arrays
    have a method called `map` for just this purpose. The `map` method accepts a single
    parameter, a callback function, that will be invoked with each element in the array.
    A new array is constructed from the return values. The original array is unchanged.
*/

/*
  Here is an example of map that negates every element.
  TODO: Uncomment it to see it run.
*/

 var positivesAndNegatives = [-1, 2, -3, 4, -5];
 var negativesAndPositives = positivesAndNegatives.map(function(n) {
   return n * -1;
 });
 console.log(positivesAndNegatives);
 console.log(negativesAndPositives);

/*
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

var doubles = numbers.map(function(n) {
  return n * 2;
});
console.log(doubles);

/*
  TODO: `Math.sqrt` is a function that will return the square root of a number.
    Math.sqrt(144) will return 12. Use `Math.sqrt` to create an array of the square roots
    of the elements of the `numbers` array. Then print the result to the console.
*/

var roots = numbers.map(Math.sqrt);
console.log(roots);


numbers = [1, 2, 3, 4, 5];

/*
  Next, let's find the sum of a list of numbers.

  Again, let's look at how we might approach this in a non-functional way.
*/

/*
  TODO: Write a for loop to iterate through the numbers array and calculate the sum
    of all the elements. You may want another variable to hold the sum. Then print
    the result to the console.

    Hint: For loops in JavaScript are identical to for loops in Java. Look here
      for an example: http://www.w3schools.com/js/js_loop_for.asp
*/
sum = 0;
for(var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);



/*
  This approach has many of the same deficiencies as before.

  This operation is called a reduction, because we are reducing a collection of
    values into a single result. JavaScript arrays have a method called `reduce`.
    The `reduce` method accepts 2 arguments, a callback function that will be invoked
    for each element in the array, and an initial value for the reduction. The
    callback function in `reduce` will receive two parameters each time it is invoked,
    the 1st is the current "accumulation" value, and the 2nd is the current element
    in the array.
*/

/*
  Here is an example of `reduce` that finds the max value of a list.
  TODO: Uncomment it to see it run.
*/

 var randomNumbers = [10, 5, 9, 12, 3];
 var max = randomNumbers.reduce(function(currentMax, n) {
   return n > currentMax ? n : currentMax;
 }, 0);
 console.log("The max of " + randomNumbers + " is " + max);

/*
  More docs for Array#reduce: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce#Syntax
    (Warning, spoilers in there...)
*/

/*
  TODO: To find the sum, create a reducing function that will add its two arguments.
    You might try creating a new function here, or try using the functions you have
    already created. Then print the result to the console. Also print the `numbers`
    array to the console to verify that it remains unchanged.
*/

sum = numbers.reduce(function(currentSum, n) {
  return currentSum + n;
}, 0);
console.log(sum);

sum = numbers.reduce(add, 0);
console.log(sum);


/*
  TODO: Use functions you have already created and the numbers array to find
    the factorial of 5. (1 * 2 * 3 * 4 * 5). Print the result to the console.
*/

var factorial = numbers.reduce(multiply, 1);
console.log(factorial);





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

var names = employees.map(function(employee) {
  return employee.name;
});
console.log(names);

var employeesById = employees.reduce(function(employeesMap, employee) {
  employeesMap[employee.id] = employee;
  return employeesMap;
}, {})
console.log(employeesById);

var totalTenure = employees
  .filter(function(employee) { return employee.tenure > 20; })
  .reduce(function(total, employee) { return total + employee.tenure;}, 0);
console.log("Total tenure is " + totalTenure + " years.");


console.log("Done!");
