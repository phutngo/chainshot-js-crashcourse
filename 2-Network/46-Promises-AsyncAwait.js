//https://www.youtube.com/watch?v=_8gHHBlbziw
//AJAX = Async JS XML - no one uses XML anymore and uses JSON instead.

//Sync code example
function otherFunct() {
    console.log("we are in another funct");
    console.log("do some stufff")
    return "abc";
}

console.log("---start");

otherFunct();

console.log("---endSYNC");

//ASync code example
function otherFunct() {
    console.log("we are in another funct");
    console.log("do some stufff")
    return "abc";
}

console.log("---ASYNC-start");

let returnedVal = setTimeout(() => {
    console.log("We are in the timeout")
}, 2000) //callback is not always async. it is used async here. callback is just a function that is invoked from the main calling function.

console.log(returnedVal);

console.log("---endASync");

