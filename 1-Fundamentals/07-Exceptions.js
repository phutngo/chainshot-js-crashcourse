const error1 = new Error("Something bad happened!");
const error2 = Error("Something bad happened!");

/*
The two statements are functionally equivalent. They both return an Error object with the error message being "Something bad happened!". The message is a good place to write some details about why the error occurred that will help someone debug the issue.

 Typically you will see Error created with the new operator. In JavaScript, new is commonly used when creating a new instance of an object. We'll talk about this more in JavaScript Prototypes.
*/

const a = 3;

if(a === 3) {
    throw new Error("we dont want a to be 3");
}

// <-- we never reach this line

//We should throw errors in places where we would want execution of the code to stop. We'll continue the code execution from wherever the error is caught. We'll discuss this in stage 2.

function throwError() {
    throw new Error("new error threw here!")
}

//catching an error
//The argument fn is a function that will throw an error when invoked. Catch the error that is thrown when invoking fn.
function catchError(fn) {
    try {
        fn();
    }
    catch(fn) {
        console.log(fn);
    }
}
