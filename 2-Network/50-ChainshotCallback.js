/**
 * For Each Callbacks
Let's create our own forEach function!

 Your Goal: Complete the ForEach function
This function will take two parameters:

An array of elements
A callback function that we want to run for each element in the array
Be sure to call the callback function with both the current element in the array and the zero-based index.

Example:

forEach(['a','b','c'], (e,i) => {
    console.log(e,i);
});
The console.log line should run three times, logging:

a, 0
b, 1
c, 2
 */

function forEach(arr, callback) {
    // for each element in the arr, run the callback, passing in the element
    let i = 0;
    for (i = 0; i < arr.length; i++){
        callback(arr[i], i);
    }
}

export default forEach;

/**
 * Map Callback
Now let's write our own map function! We'll want to take an array and run some function over each element, replacing that element with the function's return value.

For example:

const newArray = map([1,2,3], (x) => {
    return x * 2;
});

console.log(newArray); // [2,4,6]
 Your Goal: Complete the Map Function
Map each element in the array to its new value returned by the callback function.

Just like the previous stage, you'll want to run a function on each element in the array. Only this time you'll need to create a new array which you'll return at the end of the map iteration.
 */

function map(arr, callback) {
    let newArray = []
    for (let i = 0; i < arr.length; i++) {
        newArray[i] = callback(arr[i], i);
    }

    return newArray;
}

export default map;