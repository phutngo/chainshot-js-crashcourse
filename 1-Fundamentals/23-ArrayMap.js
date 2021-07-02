//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
/**
 Map Function
The map function is stored on the Array.prototype. This means that every new array we create has access to the method!

By passing a function to map we apply it to every element in the array. For example:

const array = [1, 3, 5];

const result = array.map(function(x) {
    return x * 2;
});

console.log(result); // [2, 6, 10]
In this example, we pass an anonymous function returning x doubled. This function is applied to every element in the array. 1 becomes 2, 3 becomes 6 and 5 becomes 10.

 Your Goal: Map Add One
Take the array arr and add one to every element, return the resulting array.
 */

function plusOne(arr) { //this function takes an array arr as argument
    const p1 = arr.map( (x) => { //we create a new array by using arr.map. arr.map takes a function as an argument. this function will be applied to each element of arr. each element of array is taken as a parameter x.
        return (x + 1)
    })

    return p1;
}

