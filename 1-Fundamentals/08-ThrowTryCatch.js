//https://www.w3schools.com/js/js_errors.asp

//this function simply throws a custom error we made
function throwError() {
    throw new Error("new error threw here!") //throws a new error message. //! can comment out the throw new error to test the no errors situation.
}

//this function will try and catch the error
function catchError(fn) {
    try {  // test a block of code for errors by calling the fn
        fn(); //block of code to try
    }
    
    catch(fn) { //handle the error by console loggin it.
        console.log(fn); //block of code that handles the error(s)
        return fn //returns the error if there is one
    }

    finally {
        //block of code to be executed regardless of the try/catch result
        console.log('finally !!! code block that always executes regardless of try/catch result')      
    }

    return 'Return No Error'; //return 'No Errors' if no errors. can see the return if console log and fn does not throw error

}

catchError(throwError) //invokes catchError with the throwError as a function
//console.log(catchError(throwError)); 


