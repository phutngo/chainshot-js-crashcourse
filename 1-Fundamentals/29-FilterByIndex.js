/**
 * Filtering By Index
When supplying a function to filter, the first argument is the element and the second argument is the position of that element (a zero-based index).

Let's see an example:

['a','b','c'].filter(function(el, i) {
    console.log(el, i);
});
The console.log will get called 3 times:

First Iteration will log a, 0
Second Iteration will log b, 1
Third Iteration will log c, 2
As you can see, the index starts at 0 and is incremented by 1 each iteration.

 Your Goal: Take the First 3
Given an array of elements, keep only the first 3 elements.

Return an array with only these three elements included.
 */

function firstThree(array) {
    let filtered = array.filter( (el, i) => {
        return (i <= 2);
    })
    return filtered;
}