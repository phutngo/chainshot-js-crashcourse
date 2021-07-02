/**https://www.chainshot.com/content/5c492009e714340017be6e1d5d6704b3e5a95ac05652f6f9/stage/5c492009e714340017be6e1d5d67eeefe5a95ac05652f713
 * All Unique
If you made it this far in the tutorial you really know what you're doing with array reduce! AMAZING.

One last idea we want to introduce to you.

In the reduce function you will also have access to the index of the element in each iteration. For example:

['a','b','c'].reduce((a,c,i) => {
    console.log(c,i); 
});
The logs will be:

a, 0
b, 1
c, 2
This code exercise illustrates a situation where the index really comes in handy!

We want to return whether or not the entire array is unique.

So, why does the index help?

Think about this:

const arr = [1,2,3,1];
console.log(arr.indexOf(1)); // 0
The index of 1 in arr is the first index that it shows up at. It completely ignores the index 3 where 1 also exists.

If we are ever at an iteration where arr.indexOf(currentValue) !== index, we know that the number must exist somewhere else earlier in the array!

 Your Goal: Are all Unique?
Finish the allUnique function. Return true if all the elements are unique and false if they are not.
 */
// numbers is an array full of integers
// let's figure if all the numbers are unique
// i.e. [1,2,3,1] => false
// [1,2,3] => true
function allUnique(numbers) {
    return numbers.reduce((accumulator, currentValue, index) => {
        return (numbers.indexOf(currentValue) === index) && (accumulator) 
    }, true);
}

export default allUnique;

//iter1: a = true, c = 1, i = 0. => 