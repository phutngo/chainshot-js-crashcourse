/*
Recursion
A recursive function is a function that calls itself. For instance:

function countdown(n) {
    countdown(n - 1);
}
 There's some trouble with this recursive function! Can you spot it?

We can invoke it: countdown(3). This would call countdown(2), countdown(1), countdown(0), countdown(-1)… with no end in sight! 

 The results in a call stack overflow!

It's important to add a base case in a recursive function. The base case is where you stop recursing.

function countdown(n) {
    if(n === 0) {
        console.log('countdown complete!');
        return;
    }

    countdown(n - 1);
}
 Great! Our countdown stops when it reaches 0.

 Your Goal: Base Case
Let's add a base case to the function factorial. A factorial is an integer times every positive integer below it.

factorial (4); // 4 * 3 * 2 * 1 = 24
Let's start with the base case for a factorial function: 1.

Your task for this stage is simple: If n is equal to 1 return 1.

console.log( factorial(1) ); // 1
-------------
Call Stack
The call stack is a feature of the JavaScript language that keeps track of where the program has been so it knows where to return to!

Let's take for an example:

// save a user to our database
function saveUser(user) {
    db.save(user);
}

// update our users name in the database
function updateUserName(userId, name) {
    saveUser({ id: userId, name: name });

    console.log("User Updated");
}

updateUserName(123, "Charles");
 The function updateUserName calls saveUser. While we're inside of the function body of saveUser, the call stack will remember where to return to (first line of updateUserName). Once the function is complete it will return to log the user has been updated to the console.

The call stack keeps track of nested calls:

updateUserName(123, "Charles");
    saveUser({ id: 123, name: "Charles" });
For a recursive function our call stack will continue to add a new entry every time we call the function:

function countdown(n) {
    if(n === 0) return;

    countdown(n - 1);
}
If we called countdown(5), we would have the following entries in our call stack:

countdown(5);
    countdown(4);
        countdown(3);
            countdown(2);
                countdown(1);
Of course, if we remove the base case we could eventually run out of memory! Let's see that in action:

function countdown(n) {
    // if(n === 0) return;

    countdown(n - 1);
}
Running countdown(5) will now result in an Uncaught RangeError: Maximum call stack size exceeded!

countdown(5);
    countdown(4);
        countdown(3);
            countdown(2);
                countdown(1);
                    countdown(0);
                        countdown(-1);
                            countdown(/* n-1… */);
//                            Save yourself the trouble! Always remember the base case 
/*
*/
/**
 * 
 * Second Case
Okay, now that we've established a base case we're doing pretty good. No call stack overflow for us!

Next let's handle our second case. What if we called factorial(2)?

The factorial for an integer is itself multiplied by every positive integer below it. The factorial for 2 is 2 * 1.

Well, we know we want to make this recursive and we also know that factorial(1) is equal to 1. So, we should also be able to write this as:

2 * factorial(1);
 Now we're on our way to a recursive function!

 Your Goal: Handle Factorial < 2
Keep the base case that we established in the first stage. Now create logic for when n is not 1. Let's start by making it work for 2.

Be sure that factorial works for both 1 and 2!

factorial(1); // 1
factorial(2); // 2 
 * 
General Recursion
Okay great work! So you've handled factorial for both 2 and 1 so far.

We know that factorial(2) is (2 * 1).

Let's take this one step further. What is factorial(3)?

3 * (2 * 1)
Or replacing what we know:

3 * factorial(2);
Similarily, factorial(4) is 4 * (3 * 2 * 1) or 4 * factorial(3)!

 Notice a pattern? The factorial of each number n is the the number n multipled by the factorial of n-1. Written in JavaScript, n * factorial(n - 1).

 Your Goal: Generalize!
Let's make factorial work for every positive integer!

factorial(5); // 120 
 Factorial of 5 is 5 * 4 * 3 * 2 * 1 or 120.
 */

 //! 
function factorial(n) {
    if (n===1){ return 1;} //!Base case where recusion stops calling itself
    else {return n*factorial(n-1)} //! The recusive loop, note that in the recursive loop there must be a variable that goes towards the base case, in this example it's n being decremented by 1 each call.
    
}