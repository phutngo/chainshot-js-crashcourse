//https://betterprogramming.pub/javascript-tips-3-convert-error-first-callback-functions-to-promises-f2561d2aaefd
//a function that wraps a promise (returns a promise) around an existing function that does not.

//Let's see an example where we wrap callback function in a promise! 
const fs = require('fs');

const promise = new Promise(function(resolve, reject) {
    fs.readFile("abc.txt", 'utf8', function(err, contents) {
        if(err) {
            // something bad happened, reject with the err
            reject(err);
        }
        else {
            // success! resolve the promise with the contents
            resolve(contents);
        }
    });
});

//We are reading a file from the file system and wrapping the callback to create a promise.

//If there is an error, we'll reject the promise, which is caught by a catch callback:

promise.catch(function(err) {
    console.error('something went very wrong!', err);
});

//Otherwise we'll resolve the promise with the contents of the file:

promise.then(function(fileContents) {
    console.log(JSON.stringify(fileContents));
    console.log("-------------end of original---------")
});


