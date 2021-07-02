/**
 * Fizz Buzz
Write a function fizzBuzz that takes an array of numbers and replaces any number divisible by three with the word "fizz" and any number divisible by five with the word "buzz". If a number is divisible by both three and five, replace it with "fizzbuzz"

Once the appropriate numbers are replaced, return a concatenated string with only the words "fizz" or "buzz" included.

const numbers = [1, 3, 5, 9, 11, 12, 20];

fizzBuzz(numbers); // returns "fizzbuzzfizzfizzbuzz"
 */

function fizzBuzz(numbers) {

    for (let i = 0; i < numbers.length; i++){
        if (
            ((numbers[i] % 3) === 0) && !((numbers[i] % 5) === 0)
        ) {
            numbers[i] = "fizz";
        } else if (
            ((numbers[i] % 5) === 0) && !((numbers[i] % 3) === 0)
        ) {
            numbers[i] = "buzz";
        } else if  (
            ((numbers[i] % 5) === 0) && ((numbers[i] % 3) === 0)
        ) {
            numbers[i] = "fizzbuzz";
        }

    }
    //this just runs through the array and combine and print.
    let constring = ''; 
    for (let i = 0; i < numbers.length; i++) {
        if ((numbers[i] === 'fizz') || (numbers[i] === 'buzz') || (numbers[i] === 'fizzbuzz'))
        constring = constring + numbers[i]   
    }
    return constring;

}

const numarray = [1,3,4,5,6,7,8,9,12,15,16,18,25,30]
console.log(fizzBuzz(numarray));

//modified FizzBuzz with new rule -otherwise print the numebrs
function fizzBuzzMod(numbers) {

    for (let i = 0; i < numbers.length; i++){
        if (
            ((numbers[i] % 3) === 0) && !((numbers[i] % 5) === 0)
        ) {
            numbers[i] = "fizz";
        } else if (
            ((numbers[i] % 5) === 0) && !((numbers[i] % 3) === 0)
        ) {
            numbers[i] = "buzz";
        } else if  (
            ((numbers[i] % 5) === 0) && ((numbers[i] % 3) === 0)
        ) {
            numbers[i] = "fizzbuzz";
        }

    }

    let constring = '';
    for (let i = 0; i < numbers.length; i++) {
        constring = constring + numbers[i] + ' '; 
    }
    return constring;

}

console.log(fizzBuzzMod(numarray));