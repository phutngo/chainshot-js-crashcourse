/*
Destructuring, Rest & Spread
When learning JavaScript, you may often hear reference to ECMAScript, which is a language specification that JavaScript adheres to.

The last several years ECMAScript has been releasing new editions, adding features to the language specification. For example, in ES2015, support was added for arrow functions () => {}, the class operator and the import syntax, among many other features.

Web browsers quickly adopt these features and add them to new versions. However, these means older versions of the browser do not support these features. For this reason, transpilers such as babeljs exist. These transpilers will convert new language features into code that older browsers support. You can configure transpilers for specific browser support and features you'd like to use.

We're going to be talking about three convenience features added in the last few editions of ECMAScript: destructuring, rest, and spread.

 All of the features mentioned can be used inside of the JavaScript code tutorials on ChainShot!

Destructuring 
With destructuring we can "unpack" an object and assign its properties to new variables. For example, let's look at object destructuring:

const obj = {
  a: 2,
  b: 3,
}

// destructure assignment
const { a, b } = obj;

console.log(a); // 2
console.log(b); // 3
 We are destructuring the obj here to assign the values of its properties a and b to variables with the corresponding names. The values are assigned to the variables with the same name as the property. If we tried to destructure with a variable named c, it would be undefined.

We can also destructure arrays:

const arr = ["hello", "world"];

const [a, b] = arr;

console.log(a); // hello
console.log(b); // world
 In this case, we are pulling the values out the array based on their position. The first element is stored in a and the second element is stored in b.

The same thing works for function arguments! Let's see it:

function addThree([a,b,c]) {
    return a + b + c;
}

const sum = addThree([1,2,3]);

console.log(sum); // 6
 Take a look at how we can destructure the function argument itself! Very cool 

 You can learn more about destructuring on MDN.

Rest Parameters 
The rest parameters syntax can assign function arguments as an array. For example:

function log(...args) {
    console.log(args);
}

log(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]
 Here we are passing five individual arguments to the log function, the rest syntax is ...args, which is assigning an array with all of the arguments to args.

You can also grab the rest of the parameters:

function log(a, b, ...args) {
    console.log(args);
}

log(1, 2, 3, 4, 5); // [3, 4, 5]
 Here a and b will be assigned the first two arguments while ...args will be assigned the remaining three arguments in an array.

This syntax can also be used in destructuring:

const [a, b, ...others] = [1, 2, 3, 4, 5];

console.log(others); // [3, 4, 5]
Can be quite useful! 

 You can learn more about the rest parameters syntax on MDN.

Spread Arguments 
This is sort of the opposite of the rest syntax. Instead of saying "grab me the rest of the values", we're saying "spread these values out".

Let's see what that means:

const numbers = [1, 2, 3];

function add(a, b, c) {
  return a + b + c;
}

const sum = add(...numbers);

console.log(sum); // 6
 Here the numbers are being spread out to the variables a, b and c.

 You can learn more about the spread syntax on MDN.

Wrap Up 
All of these features are for convenience. Instead of destructuring, we can of course, simply assign variables to the object's properties:

const x = obj.x;
Rather than destructuring it:

const { x } = obj;
Similarly with the rest and spread operators. They provide a convenient way to write our code. It does not mean that you need to write your code this way.

I would suggest trying it out and see how you like it. You will run into code like this the longer you stay in JavaScript, so it's best to learn how it works!
*/

const obj = {
    a: 2,
    b: 3,
  }
  
  // destructure assignment of objects
  const { a, b} = obj; //The values are assigned to the variables with the same name as the property. If we tried to destructure with a variable named c, it would be undefined.
  
  console.log(a); // 2
  console.log(b); // 3

//REST param
function log(...args) {
console.log(args);
}

log(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]
