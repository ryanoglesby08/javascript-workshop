/*

1. jsbin.com
2. Only show JavaScript and console
3. functions
4. functions as variables and parameters
5. functions as return values
6. functional operations (map, filter, reduce)
7. Challenge! :)

*/


// ************* REGULAR FUNCTION *************** //

function add(x, y) {
  return x + y;
}

var sum = add(3, 4);
console.log(sum);



// *************** AS A VARIABLE *************** //
/*
  Notice how function is declared differently than the `sum` variable. Let's set
  our mindset that a function is just like other variables by assigning it like
  one.
*/

var add = function(x, y) {
  return x + y;
}

var sum = add(3,4);
console.log(sum);


// *************** AS A PARAMETER *************** //
/*
  So functions are variables just like strings or numbers, so that means they can
  be used as arguments to other functions. So let's use that with the `add` function
  we have to create a simple calculator.
*/

var add = function(x, y) {
  return x + y;
}

var sum = add(3,4);
console.log(sum);

var operate = function(operation, x, y) {
  return operation(x, y);
}

sum = operate(add, x, y);
console.log(sum);

var multiply = function(x, y) {
  return x * y;
}

var product = operate(multiply, x, y);
console.log(product);




// *************** RETURN A FUNCTION *************** //
/*
  Ok, cool, so functions are variables, they can be used as arguments to other
  functions. They can also be used as return values. So a function can return
  another function, that can be saved and called later.

  So, let's create a function that can create adder functions for us.

  (Start with the `var addTwo`)
*/

var add = function(x, y) {
  return x + y;
}

var createAdder = function(numberToAdd) {
  return function(x) {
    return add(x, numberToAdd);
  }
}

var addTwo = createAdder(2);
var addThree = createAdder(3);

var plusTwo = addTwo(5);
console.log(plusTwo);

var plusThree = addThree(5);
console.log(plusThree);





// *************** MAP, REDUCE *************** //
/*
  JavaScript uses functions to make your code more expressive. One example of this
  comes with array operations and transformations. These functional concepts present
  in other languages, and even in Java 8 streams: Map & Reduce.
*/

var add = function(x, y) {
  return x + y;
}
var addTwo = function(x) {
  return add(x, 2);
}

var numbers = [1,2,3,4,5];

// --------- FILTER EXAMPLE, IF TIME ---------------

// BAD, :(
// var evens = [];
// for( var i = 0; i < numbers.length; i++ ) {
//   if( numbers[i] % 2 === 0 ) {
//     evens.push(numbers[i]);
//   }
// }
// console.log(evens);
//
// // GOOD, :)
// var evens = numbers.filter(function(n) {
//   return (n % 2) === 0;
// });
// console.log(evens);


/*
  So, let's say we want to add 2 to every number in the array
*/

// BAD, :(
var addTwoToEach = [];
for(var i = 0; i < numbers.length; i++) {
  addTwoToEach.push(numbers[i] + 2);
}
console.log(addTwoToEach);

// GOOD
/*
  The map() function creates a new array with the results of calling a provided
  function on every element in starting array.
  * Does not modify the starting array.
  * Return value of provided function is used as elements of new array
*/
addTwoToEach = numbers.map(function(n) {
  return n + 2;
});
console.log(addTwoToEach);

// BEST! :)
addTwoToEach = numbers.map(addTwo);
console.log(addTwoToEach);


/*
  Now, let's find the sum
*/

// BAD, :(
var sum = 0;
for(var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);

// GOOD
sum = numbers.reduce(function(accumulation, x) {
  return accumulation + x;
}, 0);
console.log(sum);

// BEST! :)
sum = numbers.reduce(add, 0);
console.log(sum);


/*
  So, we could now take our multiply function from earlier and use it to find
  factorials of numbers...
*/
var factorial = numbers.reduce(multiply, 1);
console.log(factorial);


// *************** CHALLENGES! ***************

var employees = [{id: 1, name: "Patti"}, {id: 2, name: "Roy"}, {id: 3, name: "Craig"}];
console.log(employees[0].id);

/*
  Using only the map and reduce operations.....
    EASY. Make a new array with just the names
    MEDIUM. Transform the array into a Map (JavaScript object), where the keys are the ids, and the values are the {id, name} objects
    HARD. Find the total number of letters of all names put together
*/

//EASY
console.log(
  employees.map(function(e){
    return e.name;
  })
);


//MEDIUM
console.log(
  employees.reduce(function(empMap, e) {
    empMap[e.id] = e;
    return empMap;
  }, {})
);


// HARD
console.log(
  employees
    .map(function(e){
      return e.name;
    })
    .reduce(function(length, name) {
      return length + name.length;
    }, 0)
);
