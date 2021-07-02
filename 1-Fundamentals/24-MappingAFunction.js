/*
Mapping a Function
In the last stage we created an anonymous function to use in the map function.

We can do the same thing with functions that we have previously defined:

function addOne(x) {
    return x + 1;
}

const result = [1,2,3].map(addOne);

console.log(result); // [2,3,4]
As well as built-in JavaScript functions:

const absolutes = [-1, 1, -2, 2].map(Math.abs);

console.log(absolutes); // [1,1,2,2]
Here Math.abs returns the absolute value of each element in the array.

 Be careful when passing a function to map. It will pass multiple arguments to your function which may cause it to behave unexpectedly!

 Your Goal: Take the Square Root
Using the squareRoot function, map each element in the array arr to its square root. Return the new array.

const result = squareRoot([2,4,9]);

console.log( result ); [1,2,3]
 You can use the built-in function Math.sqrt which takes one single argument and returns the square root of that argument. Here is the documention of Math.sqrt.

Next Stage
 */

/*
/!! //! Multiple Arguments Gotcha
The function that is passed to map will actually recieve multiple arguments.

[10, 20].map((el, i, arr) => {
    console.log(el, i, arr);
});
What are el, i and arr? Let's take a look at what is logged to the console!

This will hit console.log twice:

First Iteration it will log 10, 0, [10,20]
Second Iteration it will log 20, 1, [10,20]
So what are those arguments exactly?

The first argument el is the element that is being passed to the function.
The second argument i is the zero-based index of that element in the array.
The third argument arr is the array itself.
Now, how might this cause unexpected behavior?

Let's say we had a function called sayHello:

function sayHello(name, greeting) {
    if(greeting === undefined) {
        greeting = "Hello";
    }
    return `${greeting} ${name}!`;
}
*/
function squareRoot(arr) {
    const rooted = arr.map(Math.sqrt);
    return rooted;
}

module.exports = squareRoot;
