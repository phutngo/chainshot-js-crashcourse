/**
 * Introduction to Promises
Quite often when we're writing JavaScript code we need to wait for something to happen before continuing. Some examples are:

Waiting for a user's input
Waiting for an animation to finish
Waiting for some time to elapse
Waiting for a server response
In all of these cases we write asynchronous code. We tell JavaScript where to pick up after something has occurred. We can do this by passing a callback function as an argument to a function.

Let's take a look at an example:

runAnimation(function() {
    // do something after the animation is complete
});

Promises give us an alternate way to configure our callback functions:

const animationPromise = runAnimation();

animationPromise.then(() => {
    // do something after the animation is complete
});
 As you can see, promises allow us to wire up callbacks in a different way. We can even return promises from functions!

Let's see how this benefits us further through some coding exercises.
 */
//https://www.chainshot.com/intro/5c492009e714340017be6e1d5dbc742ea54be5305b6b335a/

/**
 * Using Promises
JavaScript is single-threaded. Because of this you will find yourself writing quite a bit of asynchronous code. This refers to writing code that will execute at some future point in time after something has happened.

Providing a callback function as an argument is a classic way of handling asynchronous code. We went over this approach in Callback Functions.

Promises provide an alternative:

const promise = getServerData();

// similar to using a callback function argument,
// except we wire up the callback using .then 
promise.then(function(data) {
    // this function is called asynchronously
    // once the server has responded with data
    console.log('got data', data);
});
 ----Here getSeverData returns a promise.---

We can call .then and provide a function that is invoked once the server data is resolved.

 Your Goal: Make the Food!
We need to make some food! 

When the customer asks for food the request function will be invoked. This function should call the function makeFood which takes food as its only argument. The function makeFood will return a promise.

 The makeFood function is imported at the top of the file from Kitchen.

Add a callback function to the .then of the makeFood promise. Once it is called the food is ready! At that point set the order isReady is true.
 */

/**
 * Single Threaded
JavaScript is single threaded. This means that only one process is run at any given time. If you had a loop that continued to run for 10 seconds, the JavaScript engine could do nothing other than run the loop until 10 seconds have expired.

This is why it's important to write our JavaScript code to be non-blocking. This means that if the code needs to wait on something else, it tells JavaScript where to return to once that is complete. This might mean waiting on user input, an animation, a timeout or a server response. During this time the engine is freed up to do whatever else it needs to do.

This is why asynchronous programming is so important in JavaScript. Especially in the browser, it's very common to write code that waits for something to happen before continuing:

When a user clicks this button, do this.
When an animation is finished, do this.
When a server responds with this information, do this.
All of these would be asynchronous actions. The "do this" part would be picked up by the engine once the first part has finished and the thread is freed up to execute the code.

Callback Function Arguments
Providing a callback function as an argument is a great way to handle asynchronous code.

The readFile function in the Node.js fs library allows us to pass a callback function:

fs.readFile("abc.txt", function(err, content) {
    if(err) {
        console.error(err);
    }
    else {
        console.log(content)
    }
});
This works pretty well! However, it can quickly get ugly when we have many callbacks.

io.readFile("other.txt", function(contents) {
    sendToServer(contents, function(response) {
        writeLog(response, function() {
            console.log('written!');
        });
    });
});
 The code continues to nest in further towards the right! Some developers lovingly refer to this as callback hell. 

Promises are quite a bit easier to pass around and return to higher-level functions:

const filePromise = readFile("other.txt");
 In this case, we can use filePromise in other functions to represent the file contents when they are ready! It makes it easier to organize code in a more readable way:

filePromise.then((contents) => {
    // do something with the file contents
});
 */

//Mozilla - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
//! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

const { makeFood } = require('./Kitchen');

class Order {
    constructor() {
        this.isReady = false;
    }
    request(food) {
        makeFood(food).then( () => {this.isReady = true} );
    }
}

module.exports = Order;

/**
 * Errors
Sometimes a promise does not resolve successfully.

For example: We want to get data from the server and the server cannot handle our request. In this case we might receive an error response code from the server.

In promises, we can handle errors with .catch:

const promise = getDataFromServer();

promise.catch((err) {
    console.error('oh no something bad happened');
});
 From the promise implementer's side this is known as rejecting the promises, as opposed to resolving with the server data.

 Your Goal: Handle Rejection
What if the kitchen was all out of a particular ingredient? Let's be sure to catch an error from the makeFood promise.

When we need to create a new order, we'll request the food:

const order = new Order();

order.request({ burgers: 1 });
If there is an error on the request, it should be stored on the order:

console.log(order.error); // Out of buns
 Be sure to store the error on the order instance just like isReady!

Next Stage
Order.js
test.js
123456789101112
const { makeFood } = require('./Kitchen');

class Order {
    constructor() {
        this.isReady = false;
    }
    request(food) {
        makeFood(food).then( () => {this.isReady = true} );
    }
}

1
class Task {
    constructor(order) {
        this.order = order;
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
}


1
const { finishFood, problem } = require('../Kitchen');
const Order = require('../Order');
const { assert } = require('chai');

describe('failed order', () => {
    let order = new Order();

    it('should not initially be ready', () => {
        assert.equal(order.isReady, false);
    });


 */

const { makeFood } = require('./Kitchen');

class Order {
    constructor() {
        this.isReady = false;
        this.error = "";
    }
    request(food) {
        const setReady = () => { this.isReady = true };
        const setError = (err) => { this.error = err }; 
        makeFood(food).then(setReady).catch(setError);
    }
}

module.exports = Order;

/**
 * CREATING A PROMISE
In the last couple stages we learned how to handle a returned promise. In this stage we create a promise!

Most modern JavaScript environments have a built-in Promise object that can be use to create a new Promise:

const promise = new Promise(function(resolve, reject) {
    resolve('resolve successful!');
});
 The function provided to the promise is called an executor function. This function is called immediately and typically will be set to resolve after something asynchronous has happened.

 You can find documentation for Promise on MDN.

promise.then(function(message) {
    console.log(message);
});
 See a more practical example of using a promise in Details.

 Your Goal: Return a Resolved Promise
Within the timer function, return a new resolved promise.

 There is no need to do anything inside the executor function other than invoke the resolve function.
 */

 /**
  * EXECUTOR FUNCTION
The function passed to Promise is called the executor function.

new Promise(function executor(resolve, reject) {
    // inside the executor function 
    // we can either resolve or reject
    if(success) {
        resolve();
    }
    else {
        reject();
    }
});
 You can see the executor function in the above example is named. This function is called immediately once the promise is created.

Inside this function we can resolve, which will call all functions wired as callbacks in the promise then method.

Alternatively, we can reject, which will call functions wired as callbacks in the promise catch method.

 Both resolve and reject can take arguments that will be passed directly to the then and catch callbacks respectively.

File System Example
Let's see an example where we wrap callback function in a promise! 

const promise = new Promise(function(resolve, reject) {
    fs.readFile("abc.txt", function(err, contents) {
        if(err) {
            // something bad happened, reject with the err
            reject(err);
        }
        else {
            // success! resolve the promise with the contents
            resolve(contents);
        }
    });
});
 We are reading a file from the file system and wrapping the callback to create a promise.

If there is an error, we'll reject the promise, which is caught by a catch callback:

promise.catch(function(err) {
    console.error('something went very wrong!', err);
});
Otherwise we'll resolve the promise with the contents of the file:

promise.then(function(fileContents) {
    console.log(fileContents);
});
  */

//! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
//! "Processing continues to the next link of the chain even when a .then() lacks a callback function that returns a Promise object. Therefore, a chain can safely omit every rejection callback function until the final .catch().""

//! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise

//There are two ways to create promises - see exammples section of the above link.
//One way is to create a Promise which is like an object that
//1. does something async then eventually
//2. calls resolve
//3. or calls reject

//Second way is to provide a function with promise capabilities by returning a Promise:
/*
function myAsyncFunction(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", url)
    xhr.onload = () => resolve(xhr.responseText)
    xhr.onerror = () => reject(xhr.statusText)
    xhr.send()
  });
}
*/

/*
Asynchronous Executor
The purpose of the executor function is to wrap some asynchronous action and provide callbacks for the result.

const p1 = new Promise(function executor(resolve, reject) {
    runAnimation(function() {
        resolve();
    });
});
The runAnimation only accepts one callback function after the animation is complete.

By wrapping this in a promise, we create a new object p1 which can be used to wire up many callbacks with then:

p1.then(function() {
    showDialog();
});
p1.then(function() {
    removeAnimation();
});
 These two then callbacks can be wired up in different places in the program, allowing us to seperate concerns more easily.

 Your Goal: Asynchronous Timer
Let's modify the timer executor function to resolve after one second.

You can run code after one second by using a timeout:

setTimeout(function() {
    // do something in here
}, 1000);
*/
function timer() {
    return new Promise ( (resolve, reject) => {
        //do something
        setTimeout(resolve, 1000);
    })
}

module.exports = timer;

