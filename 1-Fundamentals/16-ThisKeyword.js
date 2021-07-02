//!https://www.w3schools.com/js/js_this.asp#:~:text=The%20JavaScript%20this%20keyword%20refers,refers%20to%20the%20owner%20object.

//!https://codeburst.io/all-about-this-and-new-keywords-in-javascript-38039f71780c#:~:text=this%20keyword%20refers%20to%20an,how%20the%20function%20is%20called.

//! https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/

//! 'this' is an object. 
//! The 'this' object defaults to the execution scope of the browser. In strict mode there is no default and 'this' is undefined.   
//! If the function uses this then when that function is called within the context this is used.
//! You can explicitly pass in the context for this as the first argument of the function, using methods call() and apply()


//https://www.chainshot.com/intro/5c492009e714340017be6e1d5db228dca54be5305b6b32c6/
/**
 * This Keyword
In JavaScript, the this keyword provides a function with context.

A function may act different depending on what this is:

function logout() {
    if(this.isLoggedIn) {
        this.removeAuthToken();
        this.redirectToSignIn();
    }
}
As we'll learn in the Prototype Chain lesson, JavaScript has a powerful tool for creating new objects and linking them to a common function. These functions can be written once and applied to whatever this is.

// an example of a "constructor" function
// we'll explore this in further detail
function Person() {
    this.name = "Steve";
    this.age = 32;
}
Let's learn about the this keyword, the rules by which it's bound and how we can use those in our programs.
 */

/**
 * This Keyword
In JavaScript, you can always access the keyword this. It is a way of defining the context of a function.

In global scope (not inside of a function), this refers to the module itself within Node.js or the window within the browser.

When it comes to functions, this can be set in a few different ways. Let's focus first on how we can explicitly set it.

function sum() {
    return this.a + this.b;
}
//!If we were to run sum() directly, this would be set from the global scope and likely neither a nor b would be defined.

We could instead, //!call the function with a specific context:

const result = sum.call({ a: 2, b: 4 });

console.log(result); // 6 
The method call is available on all JavaScript functions. //!The first argument we pass to call becomes this inside the function.

 Another method that manipulates a function's context is apply. To see the difference between these two methods, check out details.

 Your Goal: Get Name
Create a function which retrieves the property name on this.

You can expect the property to exist. Example:

const name = thisName.call({ name: 'Ted' }); 

console.log(name); // Ted
 */

function sum() {
    return this.a + this.b;
}

const result = sum.call({ a: 2, b: 4 }); //invoke sum with specific context of the first object being passed into the function as this. Note this function has no parameters. //?Why not just have parameters instead of using this?
console.log(result); // 6 

/*
Binding
Rather than relying on a function to be called with the correct this at the time of invocation, we can bind functions:

function thisName() {
    return this.name;
}

const newFunction = thisName.bind({ name: 'Ted' }); 

console.log(newFunction()); // Ted
console.log(thisName()); // undefined
 Notice that bind does not change the nature of the original function. It creates a new function that is bound with the provided this.

Once a function is bound, the binding cannot be overwritten. Let's say we tried to bind newFunction from above:

const newFunction2 = newFunction.bind({ name: 'Walt' });

console.log(newFunction2()); // Ted
 The method bind can also bind arguments!

 Your Goal: Bind it Bob
Create a new function from thisName that is bound to an object with the name "Bob".

Export this new function instead of thisName.

When it is called, it should return "Bob":

const result = newFunction();

console.log(result); // "Bob"
*/

function thisName() {
    return this.name ;
}

const binded = thisName.bind({ name: 'Bob' });

module.exports = binded;

/*Implicit Binding
Call-Site
Without explicitly setting this with call or apply there are few rules that dictate what this will be for a function.

These rules depend on how the function is called. Let's take a look at a function defined as an object's property:

const obj = {
    value: 2,
    getValue: function() {
        return this.value;
    }
}
 Depending on how we call getValue, the result could be very different:

console.log( obj.getValue() ); // 2
We called the function by accessing it on the object's property. The this keyword is implictly bound to the object it is being called on.

Let's see another example using the same obj:

const fn = obj.getValue;

console.log( fn() ); // undefined
Whoops! 

In this second example, this is not the obj itself. It is actually the global this. Without being called directly on the object, this is not bound at all!

 The place where the function is called is generally referred to as the call-site of the function. If the function is not otherwise bound, it will determine the value of this.

 Your Goal: Add Get Name
Add a function getName to the obj that will retrieve the name when it is called on an object.

For example:

const name = obj.getName();

console.log(name); // Bob
*/
const obj = {
    name: 'Bob',
    getName: function () {
        return this.name;
    }
}

/*
Unbound Function
In JavaScript it is often helpful to define functions inside of other functions. In these cases, keeping track of the bound context can be quite tricky!

 You'll see this behavior quite often in asynchronous programming. Asynchronous means the code may run at a future point in time, depending on things like animations, network calls or user interaction. We'll look at this closer in Callback Functions.

Let's take a look at an example:

const YEAR = (1000 * 60 * 60 * 24 * 365);

function addYear() {
    setTimeout(function() {
        this.age++;
    }, YEAR);
}

const person = { name: 'Fred', age: 29 }

addYear.call(person);
This function should run after one year, incrementing Fred's age. However, when the function finally does run, this will not be set to the person. The function passed to setTimeout is not bound to the same this and defaults to the global this.

If we want to fix it, there are several ways:

Closure
Bind the Function
Arrow Syntax
 Be sure to check out arrow syntax! It results in a very clean solution to this problem. 

 Your Goal: Fix the Context
Within the function Celebrity a method is used to fetch the celebrity's age. The second argument to fetchAge is a callback function. The callback function will receive age as an argument.

 Unfortunately, due to the function call-site, this will be re-defined to not refer to the celebrity. Running the tests without modifying the code will result in a TypeError.

Fix this.age to refer to the same this as the function Celebrity.
*/

/*
Closure
A common way to fix issues with context in JavaScript is to capture the value of this inside of a function scope. Then you can refer to the new variable knowing it hasn't changed:

function addYear() {
    const that = this;
    setTimeout(function() {
        that.age++;
    }, YEAR);
}
This defines that which captures the context this within the addYear scope. Then we use that to increment age.

Bind the Function
Just as we did in stage 2, we can bind the function inside of the setTimeout. Let's see how this works:

function addYear() {
    setTimeout(function() {
        this.age++;
    }.bind(this), 1);
}
We use .bind to create a new function from the one we pass to setTimeout. This new function is bound to the same context as the addYear function itself.

Arrow Syntax
There is another way to define function expressions, referred to as "Arrow Syntax". The difference between the arrow syntax and the traditional function syntax is in behavior with this. The arrow syntax will actually capture the context of the surrounding function here:

function addYear() {
    setTimeout(() => {
        this.age++;
    }, YEAR);
}
Just by changing from function() { } to () => {} we can fix the context issue!

 Arrow functions are a new language feature in the latest versions of JavaScript. When working with older browsers or JavaScript environments this feature may not be available. It is available in most modern environments now! See more information here. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 */

 // retrieve a prop that is deeply nested within objects
// i.e. { prop: { prop: { prop: 3 }}} => 3
function deepRetrieval(obj) {
    while (obj.prop) { //while obj.prop is not undefined
        obj = obj.prop;
    }
    return obj;
}