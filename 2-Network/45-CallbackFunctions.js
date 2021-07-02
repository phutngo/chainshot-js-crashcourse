/**
 * Callback Functions
In JavaScript, functions can be stored, returned and passed as arguments like any other object.

//!It's useful to pass functions as arguments when you need them to be called at a specific time that the function caller doesn't (or shouldn't) have direct access to. This is why you might see callbacks used frequently in JavaScript libraries and plugins.

//! The main calling function would also require that the callback function accept certain # and type of arguments that the main calling function will pass arguments into as well.


 For example, an animation library might give you the ability to pass in a callback function when the animation is complete. Instead of editing the animation library directly (which may break it) the author gives you this ability to run a function at a specific point in time!

Callbacks are also commonly associated with asynchronous programming since they allow you to pick up executing code at some future point in time. Asynchronous programming will wait for something else to happen before running. Common asynchronous situations include waiting for user feedback, waiting on a server response or waiting for an animation to complete.

Let's dive into callback functions and how they work.
 */
/**
 * Running a Callback Function
In JavaScript, functions are first-class objects. This means, just like objects, functions can be stored in variables, returned from functions, and passed into other functions as arguments.

With callback functions we will be passing functions into other functions to be called at a very specific time.

Let's think of a very simple case:

function simpleFunction(fn) {
    // invoke the callback function
    fn();
}

simpleFunction(function callbackFunction() {
    console.log('hi');
});
 In the above example, callbackFunction is passed to simple Function as an argument and then invoked immediately. The result is that 'hi' is logged once to the console.

 Your Goal: Complete Run Callback
Let's try this out for ourselves! Complete the function runCallback to invoke callbackFunction immediately.
 */

/**
 * Asynchronous Callback
In the last stage we discussed how callbacks are run at a specific time when they are passed to another function. Typically, this makes them extremely useful for asynchronous programming.

For web-applications, where JavaScript is especially prevalent, asynchronous callbacks can be helpful in several scenarios:

AJAX requests to the server
Waiting for a user response
Animations
A simple example for asynchronous code is to use the web API setTimeout which will run code after a set amount of time:

setTimeout(function callback() {
    // the code to run after 1000 milliseconds
}, 1000);

// code down here runs synchronously (before the callback)/before 1000milliseconds.
In setTimeout we give it a callback to run after a period of time (in milliseconds). The first argument to the function is the callback and the second argument is the number of milliseconds to wait before running the callback function.

 See the full documention of setTimeout on MDN.

 Your Goal: Make Run Callback Asynchronous
Let's modify runCallback to make callbackFunction run asynchronously.

Just like the example above, use setTimeout and invoke callbackFunction 1000 milliseconds (1 second) after runCallback has been called.

N
 */

/**
 * Runs a callback function immediately
 * @param {function} callbackFunction
 */

function runCallback(callbackFunction) {
    setTimeout(callbackFunction, 1000);
}

/**
 * Dialog Callback
For this stage, we will create a callback that will be invoked by user interaction. Compare this usage to the previous stage where our callback was fired once an alotted amount of time had passed.

Imagine we have a basic dialog component for our web application. This Dialog component will use the JavaScript class, so we can create a new instance of the dialog whenever we need one.

 Your Goal: Complete Dialog Functions
We're going to write two functions for our dialog component:

onClose - This method will take a callback function as an argument and store it on our Dialog instance.
close - This function will be used to close the dialog. When we close the dialog, we'll want to call the callbackFunction.
In practice, when we want to use the Dialog component, we could wire up some logic to execute when a specific dialog is closed. For example, we could refresh the data on the page:

const dialog = new Dialog();

dialog.onClose(function() {
    // refresh data on the page to reflect state 
    // changes made inside of the dialog
    refreshData(); 
});
 Remember in the last stage the callback was invoked asynchronously by setTimeout. This callback is similar! The main difference here is the close function is kicked off by the user when they click out of the dialog.
 */

 //https://www.chainshot.com/content/5c492009e714340017be6e1d5d6bf27fe5a95ac05652f718/stage/5c492009e714340017be6e1d5d6bfbade5a95ac05652f720

 //?
 
 class Dialog {
    constructor() {
        
    }
    close() {
        this.callbackFunction();
    }
    onClose(callbackFunction) {
        this.callbackFunction = callbackFunction;
    }
}

export default Dialog;

/**
 * Multiple Dialog Callbacks
The rest of your development team loves the Dialog component! 

They requested the ability to wire up multiple callbacks to the dialog closing. 

 Your Goal: Accept Multiple Callback Functions
Let's add the ability to wire up multiple callback functions.

Each time onClose is called, we'll need to store an additional callback function on our dialog class. Once close is called, we'll invoke all of those callback functions.

 This may require you to initialize an array on the Dialog class. If you need some place for initialization code, the constructor is a great place! Remember the constructor is called once, when a new instance is created.
 */

class Dialog {
    constructor() {
        this.callbackFunctions = [];
    }
    close() {
        this.callbackFunctions.forEach((callbackFn) => {
            callbackFn();
        });
    }
    onClose(callbackFunction) {
        this.callbackFunctions.push(callbackFunction);
    }
}

export default Dialog;
