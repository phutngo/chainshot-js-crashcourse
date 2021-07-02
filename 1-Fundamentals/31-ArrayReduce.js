/**
 * Array Reduce
JavaScript’s Array.prototype.reduce can be a tricky function to grasp! When you look up the documentation on MDN you immediately see a reducer function which takes an accumulator and a currentValue, and sums them together. Sort of like the image below:

Reduce

When should you use reduce? 

Use reduce when you have an array of elements you'd like to combine into a single value or object.

Reduce Abstract

A great example of this is sum, like you saw above! We have several numbers that we want to combine (by addition, in this case) to get one number.

Let's try reduce out in some coding exercises!
 */
/**
 * Array Reduce
Let's talk about Array.prototype.reduce! 

This function is primarily meant to take an array and reduce it down to a single value.

In a simple case, this could be taking an array of numbers, say [1,2,3], summing all the numbers together, and returning the resulting value (6).

 You could imagine in a more complex case we could be taking an array of objects and reducing it down to a different array or object.

Let's focus on summing numbers. In the reduce function two arguments are provided, an accumulator and the current value. In the case of summing numbers, the accumulator is the sum after each iteration. The current value will be each element in turn.

 The best way to explain reduce is to break it down by iteration.

 Your Goal: Complete the function
Applying what you've learned, complete the function sum by adding together the accumulator and the currentValue.
 */
/**
 * Reduce to a Sum
Given the array [1,2,4] let's reduce to it's sum 7:

Reduce Sum

 As shown, we have two iterations:

First Iteration
In the first iteration the accumulator is 1 and the currentValue is 2.

The accumulator is the value "accumulated" or carried through the entire function. When you return a value in the reduce function, it will become the accumulator for the next iteration.

 Wondering why 1 is the first accumulator value? By default, the reduce function will use the first value in the array as the accumulator if an accumulator is not provided.

The currentValue will change each iteration, moving forward to the next value in the array.

Second Iteration
After we add 1 + 2 and return it, the value 3 will be used for the accumulator in the second iteration.

The currentValue will be the next item in the array, which is 4.

After these two iterations, our reduce function will return with a final value of 7.

Next Stage

 */

// numbers is an array full of numbers
// let's add all the numbers and return the sum
// i.e. [1,2,3,4,5] => 15
function sum(numbers) {
    return numbers.reduce((accumulator, currentValue) => {
        return (accumulator + currentValue); // <-- sum the numbers here! 
    });
}

//! note that whatever is being returned in the callback function becomes the accumulator that is passes back into the callback function.
//Common practice is to return the accumulator