/**
 * Unique
Let's say we had some strings and we wanted to find only the unique ones:

const strings = ['a', 'b', 'a'];
The unique values in the strings array are 'a' and 'b'.

How can we identify unique values in our strings array? Let's consider using the indexOf method:

strings.indexOf('a'); // 0
strings.indexOf('b'); // 1
It is interesting that the index of 'a' is 0. This is because indexOf returns the first index of the element in the array.

 We can take advantage of this to find unique values!

 Your Goal: Find the Unique Values
Given an array of values, return an array of unique values.

//!Keep in mind what you learned in the previous stage about the index passed to the filter function. It will continue to increase, while indexOf will always return the first index of the value.
 */

function unique(array) { //should be named remove duplicates.
    let filtered = array.filter( (el, i) => {
        return (i === array.indexOf(el)); //returns true to keep when the index i of the array is the same as the indexOf. 
    })
    return filtered;
}

const original = ['a', 'b', 'c', 'b', 'c'];
const filteredUni = unique(original);
console.log(filteredUni);