//REWRITING 51c to using ASYNC AWAIT
/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
Async functions always return a promise. 
If the return value of an async function is not explicitly a promise, it will be implicitly wrapped in a promise.

For example, the following:

async function foo() {
   return 1
}
...is similar to:

function foo() {
   return Promise.resolve(1)
}
*/

//To use await/async you need methods that return promises. The core API functions don't do that without wrappers like promisify. https://stackoverflow.com/questions/46867517/how-to-read-file-with-async-await-properly

const fs = require('fs');
const util = require('util');

//promisify converts fs.readFile to a Promised version
const readFilePr = util.promisify(fs.readFile); //returns a Promise which can then be used in async await

async function getFileAsync(filename) {
    try {
        const contents = await readFilePr(filename, 'utf-8'); //put the resolved results of readFilePr into contents
        console.log('✔️ ', filename, 'is successfully read: ', contents);
    }
    catch (err){ //if readFilePr returns errors, we catch it here
        console.error('⛔ We could not read', filename)
        console.error('⛔ This is the error: ', err); 
    }
}

getFileAsync('abc.txt');

//https://stackoverflow.com/questions/67797574/using-async-await-with-util-promisifyfs-readfile
//https://nodejs.org/dist/latest-v8.x/docs/api/util.html#util_util_promisify_original

/*

//below is the original
function getStuff() {
  return readFilePr('abc.txt', 'utf-8');
}

// Can't use `await` outside of an async function so you need to chain
// with then()
getStuff()
    .then( (data) => { console.log('💗  ', data); })
    .catch( (err) => { console.error('⛔  something went very wrong!!!!!', err)})

*/