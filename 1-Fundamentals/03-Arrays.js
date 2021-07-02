//example of array consts
const numbers = [1, 2, 3, 4, 5];
const booleans = [true, false, true, true];
const strings = ["happy", "go", "lucky"];
const nested = [[1, 2, [1, 2]], 2];

//Return true if any of the numbers in the array are 1. Return false if not.
function hasOne(array) {
    for (let i = 0; i < array.length; i++){
        if (array[i] === 1){
            return true
        }
    }

    return false;
}

// find the sum of all even values inside the array and return it.
function sumEven(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        if (!(array[i] % 2)) { //mod 2 has remainder means true, ! makes it no remainder, so if devide by 2 and no remainder then do below
        total += array[i];
        }
    }
    return total;
}

console.log('sumEven: ', sumEven([1,2,3,4]));

//function that creates random integers. 
//https://stackoverflow.com/questions/5836833/create-an-array-with-random-values
randomArray = (length, max) => [...new Array(length)]
    .map(() => Math.round(Math.random() * max));

console.log('randomArray: ', randomArray(10,10));

//take an array of numbers and return a new array that only contains unique numbers.
function unique(array) {
    let newA = [];
    for (let i = 0; i < array.length; i++){ //for each element in array
        if (newA.indexOf(array[i]) === -1) { //check if element array[i] is already in the newA array by using the indexOf method. -1 means the element array[i] is not in the newA array.
            newA.push(array[i]); // add or push the element array[i] into newA
        }
    }
    return newA;
}

//add 1 to every element within the array. Since we are modifying the array directly do not return it.
function addOne(_array) { //points to the same array with just a different label
    for (let i = 0; i < _array.length; i++) {
        _array[i] = _array[i] + 1; 
    }
    return;
}

let array = [1,2,3];
addOne(array); 
console.log('addOne: ', array); // [2,3,4]

//Given an array of integers and a number, num, find all the occurrences of the number and remove it from the array.
//Modify the array directly and do not return anything from this function.
function removeOccurrences(array, num) {
    for (let i = array.length -1 ; i >=0; i--){
        if(array[i] === num) {
            array.splice(i, 1);
        }
    }
    
    return;
}

array = [1, 2, 3, 1];
removeOccurrences(array, 1);
console.log('removeOccurances: ', array ); // [2, 3]

