//The indexOf() method returns the FIRST index at which a given element can be found in the array, or -1 if it is not present.
//!Can be used to find duplicates if the value of array.indexOf(array[i]) !== i;
let arr = ['a', 2, 2, 3, 3, 'b', 'b']
let dupes = []; //we will put the duplicates in this array 

const findDupes = (_arr) => {
    
    for (let i = 0; i < _arr.length; i++){ //for each elem in array 
        if (_arr.indexOf(_arr[i]) !== i) { //check if the indexOf vs the i
            dupes[i] = i; 
        }
        //console.log(`duplicate at array[${i}] with value of ${dupes[i]}`)
    }
    
    return dupes;
}

console.log(`If there's a number then there's a duplicate at that index:`, findDupes(arr));

//The forEach() method executes a provided function once for each array element. Always returns undefined.
//below we rewrite findDupes above using forEach()

const findDupesFE = (_arr) => {

    _arr.forEach( (element, i) => {
        if (_arr.indexOf(element) !== i) { //check if the indexOf vs the i
            dupes[i] = i; 
        };
    })
    
    return dupes;
}

console.log(`If there's a number then there's a duplicate at that index:`, findDupesFE(arr));

//The map() method CREATES A NEW ARRAY populated with the results of calling a provided function on every element in the calling array.

const findDupesMap = (_arr) => {
    
    const mappedArray = _arr.map( (elem, i, array) => {
        if (array.indexOf(elem) !== i) { //check if the indexOf vs the i
            return 'dupe'; //note that a return is needed for the Callback. here we are returning dupe at each index element.
        } else {return elem;}
    })
    
    return mappedArray;
}
console.log(`findDupesMap example:`, findDupesMap(arr))

//The filter() method CREATES A NEW ARRAY with all elements that PASS the test implemented by the provided callback function.

const filterDupes = (_arr) => {
    
    const filteredArray = _arr.filter( (elem, i, array) => {
        return (array.indexOf(elem) === i) // if unique then we keep in the array// note this is a condition.
        }
    )
    
    return filteredArray;
}
console.log(`filterDupes example:`, filterDupes(arr))

/*The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.*/
