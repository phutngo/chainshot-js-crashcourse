/*https://www.chainshot.com/intro/5c492009e714340017be6e1d5c48eff13fc30a06b8680ffa/
Pact: A Promise Library
Promises should not be scary! Let's prove it by creating our own promise implementation.

If we take a look at promises on MDN, we can see that the basic idea is to create a proxy for a value that will be asynchronously resolved. The API looks like this:

var promise = new Promise(function(resolve, reject) {
  // asynchronously resolve a value
  setTimeout(() => {
    resolve(42);
  }, 100);
});

promise.then((value) => {
  console.log(value); // 42
});
Promises may look like some crazy magic , but underneath the hood they are just a convienent API for function callbacks. Let's demonstrate this by creating our own implementation of a Promise called Pact!

We'll start out with the very basics and move quickly through a number of stages. By the end this lesson, your Pact will be able to handle asynchronous then, catch and even chaining callbacks like so:

let pact = new Pact((resolve, reject) => {
  setTimeout(() => {
      resolve(42);
  }, 100);
}).then((val) => {
  console.log(val) // 42;
  return val * 2;
}).then((val) => {
  console.log(val) // 84;
});
Excited? Let's get started!
*/

/*
Then and Catch
Let's build our own Promise Library called Pact 

As you can see in your Pact.js file, we've started you out with a Pact class.

 Your Goal: Add the Methods
Your first task is to create two class methods catch and then. These methods are used by promises to wire up callbacks.

 See examples of how these methods will be used in details.

To pass the assertions in testPact.js you'll simply need to create the class methods catch and then on your Pact class. There is no need to implement any functionality just yet!
*/

/*
Examples
Here are some of examples of promises using catch and then, so you have an idea of what we're trying to build!

const promise = new Promise((resolve, reject) => {
    // some asynchronous code here
});

promise.then(() => {
    // this function will be executed 
    // when the resolve function is called
})

promise.reject(() => {
    // this function will be executed
    // when the reject function is called
})
If we call resolve inside the promise executor function:

const promise = new Promise((resolve, reject) => {
    resolve(42);
});
The then function is invoked with 42:

promise.then((val) => {
    console.log(val); // 42
})
Similarly, if the reject function is invoked the catch function will be invoked with the value passed into reject!
*/

class Pact {
  // add methods to return on the instance
  catch() {

  }

  then() {

  }
}

module.exports = Pact;

/*
The Executor
The function that gets passed into the promise constructor is often referred to as the executor function:

new Promise(function executor(resolve, reject) {
    // inside the executor function!
});
 Let's add this functionality to our Pact!

 Your Goal: Writing the Constructor
We'll need to declare a new constructor on Pact. This constructor will take an executor function as it's only argument.

The executor function should be called immediately from the constructor with two arguments of it's own, both of which are new functions.

Let's take a closer look at the executor function example and consider how we can achieve this functionality.

For Pact it should look like this:

const pact = new Pact((resolve, reject) => {
    console.log(typeof resolve); // function
    console.log(typeof reject); // function
});
 If you can make the above comments true, you'll pass the tests! You'll need to ensure that both resolve and reject are functions passed to the executor.
*/

class Pact {
  constructor(executor) {
      let resolve = () => {};
      let reject = () => {};
      executor(resolve, reject);
  }
  
  // add methods to return on the instance
  catch() {

  }

  then() {

  }
}

module.exports = Pact;

/*
Then... What?
Now we will implement handling Asynchronous Behavior!

We want our then callback to be resolved after something happens asynchronously. Let's take a look at what we're trying to accomplish from the outside:

const pact = new Pact((resolve, reject) => {
    setTimeout(() => {
        // after half a second we resolve with 42
        resolve(42);
    }, 500);
});

pact.then((value) => {
    // after resolve is called, 42 is passed here
    console.log(value); // 42
});
Seem like a big jump in functionality? Don't be intimidated, you're already almost there! 

 Your Goal: Resolve Callback
Let's ensure that resolve calls the .then callback with the resolve value!

In the last stage we passed two functions to the executor function. The first of these functions is the resolve function. This function should invoke the callback function passed into the then function.

 We're going to need to set a class member variable in our then function that will store the function for later.
*/

/*
Asynchronous Behavior
Let's take a look at some simple asynchronous behavior:

setTimeout(() => {
    console.log(2);
}, 500);

console.log(1);
 There are two calls to console.log functions setup. Which will happen first? 

The answer:

1
// ...half a second later...
2
This is because setTimeout schedules this function to be called later! We can think of asynchronous as anything that may happen later.

This could be an HTTP request, or a user interaction:

getResourceFromServer().then(() => {
    // do something after we asynchronously get a resource
});

confirmDialog("Are you sure?").then(() => {
    // do something after the user confirms they are sure
});
*/

class Pact {
  constructor(fn) {
      this.resolve = (value) => {
          this.thenFn(value);
      }
      this.reject = () => {
          
      }
      fn(this.resolve, this.reject);
  }

  then(_then) {
      this.thenFn = _then;
  }

  catch() {
      
  }
}

module.exports = Pact;

/**
 * Your Goal: Catch the Rejection
Let's give our Pact users the ability to handle a reject callback as well as a resolve.

Similar to our last example, except now we'll want to handle reject with catch:

const pact = new Pact((resolve, reject) => {
    setTimeout(() => {
        reject(42);
    }, 500);
});

pact.catch((value) => {
    console.log(value); // 42
});
 */

class Pact {
  constructor(fn) {
      this.resolve = (value) => {
          this.thenFn(value);
      }
      this.reject = (value) => {
          this.catchFn(value);
      }
      fn(this.resolve, this.reject);
  }
  then(_then) {
      this.thenFn = _then;
  }
  catch(_catch) {
      this.catchFn = _catch;
  }
}

module.exports = Pact;

/*MULTIPLE CALLBACKS
Your Goal: Multiple Callbacks
Our Pact class wouldn't be complete if we couldn't wire up multiple .then and .catch callbacks!

Let's give it a shot. So we're trying accomplish this:

let pact = new Pact((resolve, reject) => {
    setTimeout(() => {
        resolve(42);
    }, 100);
});
pact.then((val) => {
    console.log(val); // 42
});
pact.then((val) => {
    console.log(val); // 42
});
We also want to do the same for catch and reject:

let pact = new Pact((resolve, reject) => {
    setTimeout(() => {
        reject(42);
    }, 100);
});
pact.catch((val) => {
    console.log(val); // 42
});
pact.catch((val) => {
    console.log(val); // 42
});
 This could be a bit of a tricky re-factor. Instead of storing one function with catch and reject, we'll want to be able to hold any number of functions and callback each of them with the resolve/reject value. How do we hold multiple values? 
*/

class Pact {
  constructor(fn) {
      this.thenFns = [];
      this.catchFns = [];
      this.resolve = (value) => {
          this.thenFns.forEach((fn) => fn(value));
      }
      this.reject = (value) => {
          this.catchFns.forEach((fn) => fn(value));
      }
      fn(this.resolve, this.reject);
  }
  then(_then) {
      this.thenFns.push(_then);
  }
  catch(_catch) {
      this.catchFns.push(_catch);
  }
}

module.exports = Pact;

/*
Your Goal: Immediate Resolve
Now we're cooking. 

We're adding in features that take Pact from simply working to developer-friendly! 

One feature we'll certainly want is the ability to resolve immediately if a pact has already resolved/rejected.

Think of it this way: if you passed a pact to another piece of code, that code would expect to be able to wire up a .then callback regardless of whether the pact has resolved or not yet (check out a real-world example).

We'll want to accomplish this:

const pact = new Pact((resolve, reject) => {
    // notice this happens synchronously, no timeout!
    resolve(42);
});

pact.then((val) => {
    // this should be called immediately 
    // since pact is already resolved
    console.log(val); // 42
});
 The resolve should occur before the .then has even wired up. All .then callbacks should run immediately with the resolve value.
*/

/*
Real World Example
Let's say we're building a Pizza Delivery Service. 

We know what pizza the user wants to buy, but we're not sure if we have any employees available to deliver the pizza:

function confirmPizza(driversPact) {
    confirmDialog("Are you ready to purchase?", () => {
        driversPact.then((drivers) => {
            if(drivers.length > 0) {
                // drivers available, it will be there soon!
            }
            else {
                // oof, we're quite busy at the moment
            }
        });
    });
}

// we'll imagine we have a getAvailableDrivers function
// which calls to our server for availability of deliverers
const pact = new Pact((resolve, reject) => {
    getAvailableDrivers((drivers) => {
        resolve(drivers);
    });
});

// pass the pact to our confirmPizza dialog
confirmPizza(pact);
You can see that, while we're confirming with the user whether they are ready for delivery we're also loading up how many available drivers there are.

Inside the confirm dialog callback, we can wire up a .then callback without worrying if the pact has already resolved or not. If it has, then the code will execute immediately after the user confirms. If not, it will execute as soon as we gathered the information form the server.
*/

const STATUS = {
  PENDING: 0,
  RESOLVED: 1,
  REJECTED: 2,
}

class Pact {
  constructor(fn) {
      this.thenFns = [];
      this.catchFns = [];
      this.status = STATUS.PENDING;
      this.resolve = (value) => {
          this.resolvedValue = value;
          this.status = STATUS.RESOLVED;
          this.thenFns.forEach((fn) => fn(value));
      }
      this.reject = (value) => {
          this.rejectedValue = value;
          this.status = STATUS.REJECTED;
          this.catchFns.forEach((fn) => fn(value));
      }
      fn(this.resolve, this.reject);
  }
  then(_then) {
      if (this.status === STATUS.PENDING) {
          this.thenFns.push(_then);
      }
      else if (this.status === STATUS.RESOLVED) {
          _then(this.resolvedValue);
      }
  }
  catch(_catch) {
      if (this.status === STATUS.PENDING) {
          this.catchFns.push(_catch);
      }
      else if (this.status === STATUS.REJECTED) {
          _catch(this.rejectedValue);
      }
  }
}

module.exports = Pact;

/*7
Your Goal: Chaining Callbacks
Another feature of Promise is that it allows you to chain .then callbacks.

Doing so allows you to transform the result in each subsequent callback. Let's take a look at an example:

const pact = new Pact((resolve, reject) => {
    setTimeout(() => {
        resolve(42);
    }, 100);
}).then((val) => {
    console.log(val); // 42
    return val * 2;
}).then((val) => {
    console.log(val); // 84
    return val * 2;
});

pact.then((val) => {
    console.log(val); // 168
});
 Notice how the value passed into the second .then has been doubled by the first .then callback. This happens again for our third .then callback. In regards to .then and the callbacks wired up, order matters.
*/

const STATUS = {
  PENDING: 0,
  RESOLVED: 1,
  REJECTED: 2,
}

class Pact {
  constructor(fn) {
      this.thenFns = [];
      this.catchFns = [];
      this.status = STATUS.PENDING;
      this.resolve = (value) => {
          this.resolvedValue = value;
          this.status = STATUS.RESOLVED;
          this.thenFns.forEach((fn) => fn(value));
      }
      this.reject = (value) => {
          this.rejectedValue = value;
          this.status = STATUS.REJECTED;
          this.catchFns.forEach((fn) => fn(value));
      }
      fn(this.resolve, this.reject);
  }
  then(_then) {
      if (this.status === STATUS.PENDING) {
          return new Pact((resolve, reject) => {
              this.thenFns.push((val) => {
                  resolve(_then(val));
              });
          });
      }
      else if (this.status === STATUS.RESOLVED) {
          _then(this.resolvedValue);
      }
  }
  catch(_catch) {
      if (this.status === STATUS.PENDING) {
          this.catchFns.push(_catch);
      }
      else if (this.status === STATUS.REJECTED) {
          _catch(this.rejectedValue);
      }
  }
}

module.exports = Pact;

/*8
Your Goal: Chaining Promises
Here it is! Time for promises inside promises. 

Similar to the last stage, except we're going to add one last addition:

const pact = new Pact((resolve, reject) => {
    setTimeout(() => {
        resolve(42);
    }, 100);
}).then((val) => {
    console.log(val); // 42

    // instead of returning a value, we'll return a promise
    return new Pact((resolve, reject) => {
        setTimeout(() => {
            // we're still doubling the resolve value here
            resolve(val * 2);
        }, 100);
    });
}).then((val) => {
    console.log(val); // 84
    return val * 2;
});

pact.then((val) => {
    console.log(val); // 168
});
This is going to be difficult!

You'll need to check if the value returned from .then callback is a Pact or not.

 You can check the result with result instanceof Pact or check to see if it has a .then on it typeof result.then.

You may need to create a new Pact inside the code to handle the asynchronous callback chaining.
*/

const STATUS = {
  PENDING: 0,
  RESOLVED: 1,
  REJECTED: 2,
}

class Pact {
  constructor(fn) {
      this.thenFns = [];
      this.catchFns = [];
      this.status = STATUS.PENDING;
      this.resolve = (value) => {
          this.resolvedValue = value;
          this.status = STATUS.RESOLVED;
          this.thenFns.forEach((fn) => fn(value));
      }
      this.reject = (value) => {
          this.rejectedValue = value;
          this.status = STATUS.REJECTED;
          this.catchFns.forEach((fn) => fn(value));
      }
      fn(this.resolve, this.reject);
  }
  then(_then) {
      if (this.status === STATUS.PENDING) {
          return new Pact((resolve, reject) => {
              this.thenFns.push((val) => {
                  if (val instanceof Pact) {
                      val.then((val) => resolve(_then(val)));
                  }
                  else {
                      resolve(_then(val));
                  }
              });
          });
      }
      else if (this.status === STATUS.RESOLVED) {
          _then(this.resolvedValue);
      }
  }
  catch(_catch) {
      if (this.status === STATUS.PENDING) {
          this.catchFns.push(_catch);
      }
      else if (this.status === STATUS.REJECTED) {
          _catch(this.rejectedValue);
      }
  }
}

module.exports = Pact;