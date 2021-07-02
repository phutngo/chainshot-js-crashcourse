"use strict";

//hoisting only do 2 things: variable and function DECLATION ONLY is moved to the top. Initializing is NOT hoisted.

//callstack - adds function calls/invokes to a stack //https://youtu.be/v0QTqHXiVNw?t=543. when the function is completed, it is then removed from the stack

//IIFE - immediately invoked function expression. It allows for privacy inside the function. You would define let/const any variables inside this function, so that it stays inside the function.
(function(){
    console.log('im inside the IIFE')
})(); 
console.log('final');

//GLOBAL SCOPE
let name = '🌎Phu';

console.log(name);

function sayName(){
    console.log(`Hello there my name is ${name}`);// it did not find name declared inside the function so it looks outside of the function for any higher level scope
}

sayName();

function sayNameOverwrites(){
    name = '🌎Phu-OverWRITES🌎'; //! this overWRITES the global variable
    console.log(`Hello there my name is ${name}`);// 
}

sayNameOverwrites();
console.log(name); //confirms that it was a global overwrite

function sayNameOverLOADED(){
    const name = '✨Phu-OverLOADED✨'; //! this creates a NEW  locally scoped variable that has the same name as the global variable
    console.log(`Hello there my name is ${name}`);// 
}

sayNameOverLOADED();

console.log(name); //! this is actually referencing the global variable which is Phu-OverWRITES. confirms that sayNameOverLOADED did Not update the global variable

//A Callback function is simply a function that is passed into the Calling function as an argument.
//Also, the Calling function would also dictates the parameters of the Callback function since the Calling function will be passing the arguments into the Callback function.
//Often times many libraries allow user to pass in the Callback function into the Calling function. Examples such as Array.prototype.sort( (a, b) => compareFunction {a-b}). In this example, compareFunction is the Callback function the user would write, it needs to accept arguments a and b which will be passed into the compareFunction by the Calling function sort(). Specificly here, sort will be passing in a and b as elements of the array that it wants you to compare via the compareFunction.

//Async callback //https://youtu.be/v0QTqHXiVNw?t=1272
//call stack/event loop/callback queue VISUALIZER: http://latentflip.com/loupe/ 
console.log('first');

setTimeout( () => {
    console.log('Inside the callback');
}, 1000)

console.log('last');


//! A Promise is a function that returns a Promise.
//! It takes only 1 parameter which is the executor - a function that the user defines. 
//! This executor function can be used to execute code such as async code.
//! The executor function takes in 2 arguments resolve and reject, which are functions.
//! The executor must invoke either resolve or reject by the end of its run cycle.
//! A common usage is to get the executor to run some async task and invoke resolve if it was successful and invoke reject if it was not.
//! When resolve or reject is invoked, it updates the Promise state variable from pending to fulfilled or pending to rejected.
//! If a promise is fulfilled then the .then(fnDoAfterResolve) method executes
//! If a promise is rejected then the .catch(fnDoAfterRejected) method executes
//! promises can be chained because .then returns another promise.
//! alternatively can do .then(fnDoAfterResolve, fnDoAfterRejected)
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then


//the async keyword in front of a function makes the function always return a promise. If the return value of an async function is not explicitly a promise, it will be implicitly wrapped in a promise.
//This means you can use .then on an async function.

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
//await keyword infront of a promise returns the fulfilled value of the promise (or the value itself if it's not a promise)

//SCOPE
(function testFn () {
    const favoriteFood = "pizza"; //note this is const
  
    if (true) {
      let favoriteFood = "ramen"; //this is only within the if scope!! overloaded variable name
      console.log(favoriteFood); //->ramen
    }
  
    console.log(favoriteFood); //->pizza
  })()