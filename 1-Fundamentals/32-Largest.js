/**
 * Largest Value
Now it's time to find the largest value in an array!

For an array [1,4,2,5] the largest value would be 5. Let's see how reducing this would look illustrated:

Reduce Largest

 You can see we run 3 iterations. Each time we are taking the largest value and returning it.

First 4 is greater than 1 so we return 4.
Then 4 is greater than 2 so we return 4.
Finally 5 is greater than 4 so we return 5.
 If you're wondering about the (x > y ? x : y) syntax, the question mark is called the ternary operator. It's a shortened version of if else where if the condition is true the first value is taken, otherwise the second is.

 Your Goal: Complete the Largest Value function
It's time to complete the largest value function! Determine which is larger, the accumulator or the currentValue. Whichever is larger, return it! Then it will become the accumulator for the next iteration.

Use the ternary operator mentioned above for bonus points! 
 */

// numbers is an array full of numbers
// let's find the largest and return it
// i.e. [2,3,5,1,4] => 5
function largest(numbers) {
    return numbers.reduce((accumulator, currentValue) => {
        return (accumulator > currentValue ? accumulator : currentValue);// <-- determine largest value
    });
}


/**
 * 
 * Largest Positive
You'll notice that your code has not changed from the last stage. We're going to build on what you just learned!

In this stage, let's take the largest positive number. If we don't find any positive numbers, simply return 1. There's an easy way to do this in reduce, called setting the initial value. Let's see it in an illustration:

Largest Positive

 Notice how we're providing an initial value to our iterations.

In the reduce function the initial value goes in as the second argument:

[-1,-2,-4].reduce(function() {
    // reduce logic

}, 1 /* <--- initial value */)
/*
 Your Goal: Add the initial value
 Just like the illustration above, we want our initial value to be 1. This way, if there are no positive values we will just return 1.
 * 
 */


// numbers is an array full of numbers
// let's find the largest and return it
// i.e. [2,3,5,1,4] => 5
function largest(numbers) {
    return numbers.reduce((accumulator, currentValue) => {
        return (accumulator > currentValue ? accumulator : currentValue);// <-- determine largest value
    }, 1); //the initial value is the second paramter of the reduce method.
}

export default largest;

