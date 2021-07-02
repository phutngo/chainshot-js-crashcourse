/**
 * When filtering arrays we want to come up with some boolean condition (true/false) that will determine if we should keep the element or not.

Consider the case where we only want to keep elements whose value is 1.

const ones = [1,2,3,1,1].filter((function(el) {
    return (el === 1);
}));
Here we are returning elements that are equal to 1. Our resulting ones array will be [1,1,1].

 Your Goal: Filter Less Than 5
Given an array of elements, find the elements whose value is less than 5. Return the resulting array.

Filter -Less Than 5
 */

function lessThanFive(array) {
    return array.filter( (el) => {
        return (el < 5);
    })
}

/**
 * We can apply the same filtering logic to booleans.

Given an array of booleans, keep only the true values:

Only True

Return the resulting array.
 */
function onlyTrue(array) {
    return array.filter( (el) => {
        return (el === true);
    })
}

/**
 * Filtering Strings
We can measure a strings size by using the string method length:

const size = "abc".length;

console.log(size); // 3
 Your Goal: Keep Short Strings
Given an array of strings, keep only the strings whose length is at most 3.

An example:

const result = shortStrings([
    'abc',
    'a',
    'apples',
    'television'
]);

console.log(result); // ['abc', 'a']
 */
function shortStrings(array) {
    return (array.filter( (el) => {
        return (el.length < 4);
    })
    )

}

