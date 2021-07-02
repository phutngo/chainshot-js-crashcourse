//Determine which of the two strings is shorter, return that string.
function shortestString(str1, str2) {
    if (str1.length < str2.length) { return str1}
    else if (str1.length > str2.length) { return str2 }
    else {return `${str1} is same length as ${str2}.`}
}

//The function halfValue takes an array of numbers. It should return a new array with all the original values halved.
//Odd numbers should be rounded up to the nearest whole number.
function halfValue(numbers) {
    let halvedA = [];
    for (let i = 0; i < numbers.length; i++){
        halvedA[i] = Math.ceil(numbers[i] / 2);
    }

    return halvedA;
}

//The function countC takes a string str as its only argument.
//This function should return the number of c's found in the string. It must be count both lower-case c and upper-case C.
function countC(str) {
    let strLow = str.toLowerCase();
    let count = 0;
    for (let i = 0; i < strLow.length ; i++){
        if (strLow[i] === 'c') { count++;}
    }
    return count;
}

//Write a function reverse that takes a string as an argument and returns a string with all the letters reversed.
//For example, reverse("cat") would return the string "tac".
function reverse(string) {
    let rev = '';
    for (let i = string.length - 1; i >= 0; i--) {
        rev = rev + string[i];
    }
    return rev;
}
console.log(reverse("cat"));

/*
Write a function isPalindrome that takes a word string and returns true if the word is a palindrome or false if it is not.
A palindrome is a word that is spelled the same forwards as it is backwards.
The word pop is a palindrome.
*/
function isPalindrome(string) {
    let rev = '';
    for (let i = string.length - 1; i >= 0; i--) {
        rev = rev + string[i];
    }
    
    if (rev === string) {return true}
    else { return false}
}

/*INTERESTING
Write a function countElements that takes in an array and returns an object a count of each element in the array.
const elements = ["e", "k", "e", "z", "i", "z"];
countElements(elements); // returns {e: 2, k: 1, z: 2, i: 1}
*/
function countElements(elements) {
    let elementCount = {};
    for (let i = 0; i < elements.length; i++) { //loops thru each element of array
        if (!elementCount[elements[i]]) {// elements[i] is a key. if elementCount[key] is empty then
            elementCount[elements[i]] = 1; // set the key value to 1
        } else {
            elementCount[elements[i]] += 1; // else increment it
        }
    }

    return elementCount;
}

const elements = ["e", "k", "e", "z", "i", "z"];
console.log(countElements(elements)); // returns {e: 2, k: 1, z: 2, i: 1}

/*
The function playerHandScore that takes in a string of face cards (Jack, Queen, and King only) and returns the total score of the players hand.

The cards are represented by the first letter in the name of the card:

A "K" is 4 points
A "Q" is 3 points
A "J" is 2 points
Example Usage:

console.log( playerHandScore("K") ); // 4
console.log( playerHandScore("KJ") ); // 6
console.log( playerHandScore("KQQ") ); // 10 
*/
function playerHandScore(hand) {
    
    let sum = 0;
    for (let i = 0; i < hand.length; i++){
        if (hand.toUpperCase()[i] === 'K') { sum = sum + 4}
        if (hand.toUpperCase()[i] === 'Q') { sum = sum + 3}
        if (hand.toUpperCase()[i] === 'J') { sum = sum + 2}
    }
    return sum;
}

console.log( playerHandScore("K") ); // 4
console.log( playerHandScore("KJ") ); // 6
console.log( playerHandScore("KQQ") ); // 10