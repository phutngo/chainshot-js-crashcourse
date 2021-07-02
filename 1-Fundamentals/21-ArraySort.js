/**
 * Array Sort
Sorting elements is an important part of programming! For example, it's often necessary to find the latest data by date. Perhaps a user wants to see the nearest upcoming events in their calendar. 

JavaScript arrays have a sort function that allow us to pass a specific comparison function for sorting two elements.

Sorting

In this above example, we have a function called "Sort Ascending". This function takes two arguments and compares them so they can appropriately sorted in the array.

Notice that the resulting array is not entirely sorted, only the first two elements are sorted relative to each other. The sort function will be applied several times to different elements in the array depending on the search algorithm used by JavaScript. As developers, we will simply need to provide a function that compares two numbers and indicates which number should come first.

Let's code up some comparison functions! 
 */

/** 1. Numbers Ascending
 * Array Sort
Every array created in JavaScript has access to the sort method. This method takes an optional comparison function that will determine the resulting sort order of the elements.

 Take a look at details to learn about the default behavior when a comparison function is not provided.

Let's take a look at providing a comparison function to sort numbers in ascending order (1,2,3...):

[3,2,4,1].sort(function comparison(a,b) {
    if(a < b) {
        // take a first
        return -1;
    }
    if(b < a) {
        // take b first
        return 1;
    }
    // no change is needed
    return 0;
});
The array will be sorted [1,2,3,4]. In this comparison function there are 3 possible return values:

-1 indicates a should be placed in-front of b.
1 indicates b should be placed in-front of a.
0 indicates no change in order is needed.
In fact, returning any negative value will have the same effect as returning -1 here. Any positive value will do the same as 1. This means we can shorten this function significantly:

[3,2,4,1].sort(function comparison(a,b) {
    return a - b;
});
Here, if a is less than b, the result of the subtraction will be negative (placing a first). If b is less than a the result will positive (placing b first).

 Your Goal: Sort Numbers Ascending
Given an array of numbers, sort the numbers ascending (1,2,3...) and return the sorted array.
 */

/**
 * Default Sort Behavior
The comparison function is optional. So, what happens if we don't pass one to sort?

const result = [3, 2, 4, 1].sort();

console.log(result); // [1, 2, 3, 4]
Without a comparison function, the array elements are converted to strings and compared. Lower values are moved to the front of the array.

At this point it looks like it works pretty well for sorting ascending numbers. But wait! Let's take a look at another example:

const result = [20, 1, 2, 3].sort();

console.log(result); // [1, 2, 20, 3]
Uh-oh! 20 came before 3. Sorting numerically, we know that 3 should come first. However, you have to remember that the numbers are first converted to strings before sorting. When "20" is compared to "3", the first characters are compared and "2" comes before "3". Therefore, "20" is sorted in front of "3". Very tricky!

The default sorting is more intuitive when the elements are strings as they will be sorted as such:

const result = ['orange', 'berry', 'apple', 'cherry'].sort();

console.log(result); // ["apple", "berry", "cherry", "orange"]
In summary, when sorting numbers, rather than using the default sort functionality, you should pass in your own comparison function to guarantee a proper sort.
 */
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

function sortUp(array) {
    return array.sort((a,b) => (a-b)); //ascending
}

module.exports = sortUp; //ascending

/**
 * Sorting Descending
In the previous example, we sorted our array ascending:

[3,2,4,1].sort(function comparison(a,b) {
    return a - b;
});
A negative result moves a in front of b. A positive result moves b in front of a. Zero keeps the order unchanged.

Sorting descending will be the opposite. We want a negative result to move b in front of a and a positive result to move a in front of b.

 Your Goal: Sort Numbers Descending
Given an array of numbers sort them in descending order and return the array.
 */
function sortDown(array) {
    return array.sort((a,b) => (-a+b));
}

module.exports = sortDown;

/**Comparing Strings
Strings have a built-in method for convienent comparison called localeCompare.

'a'.localeCompare('a'); // 0
'a'.localeCompare('b'); // -1
"apple".localeCompare("abcd"); // 1
 The localeCompare method also gives options for things like case, accent sensitivity and language. To learn more see the full documentation.

Conveniently, localeCompare returns the numerical values we need to help sort our strings! As shown above, when a string is compared to one that would come after it, the result is -1. When compared to a string that should precede it, the result is 1.

 Your Goal: Sort Strings Ascending
Given an array of strings, sort them in ascending order ('a','b','c'...) and return the sorted array.

 For debugging purposes, the tests will log your actual results versus the expected test results.
 */
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
function sortStringsUp(array) {
    array.sort((a,b) => {
        return a.localeCompare(b);
    });
}

module.exports = sortStringsUp;

/**
 * Your Goal: Sort Strings Descending
Now it's time to flip the sort!

Given an array of strings, sort the strings in descending order ('c','b','a'...) and return the resulting sorted array.
 */
function sortStringsDown(array) {
    array.sort((a,b) => {
        return b.localeCompare(a);
    })
}

module.exports = sortStringsDown;




