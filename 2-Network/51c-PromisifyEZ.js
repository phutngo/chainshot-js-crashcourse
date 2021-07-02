//REWRITING 51b ABOVE TO BE MORE READABLE
const fs = require('fs'); //https://nodejs.dev/learn/reading-files-with-nodejs

const executor = (resolve, reject) => { //defining our executor so that it can be used in new Promise. The Executor is a callback function to be passed into a new Promise where the Executor has 2 parameters resolve and reject. These parameterts are actually methods/functions that the new Promise will pass into the Executor as arguments. (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise). 

//https://javascript.info/promise-basics#:~:text=To%20summarize%2C%20the%20executor%20should,an%20initially%20%E2%80%9Cpending%E2%80%9D%20promise.

     
    const fsCallBack = (err, contents) => { //defining the callback that will be used in fs.readFile. fs.readFile will pass 2 arguments into our callback. we will invoke reject and resolve methods on these arguments as required by Promise
        if(err) { reject(err); } // something bad happened, reject with the err
        else { resolve(contents); } // success! resolve the promise with the contents
    };

    fs.readFile("abc.txt", 'utf8', fsCallBack)
};
/*code above does: 
1. executor will be invoked immediately when new Promise. 
2. executor takes resolve and reject methods as parameters that it will invoke depending on if the business logic dictates. So let's say if it was able to do something then it invokes resolve else it invokes reject.
3. here in this example the executor "tries" to invoke fs.readFile. As it turns out fs.readFile takes a a callback that handles err / contents. So this is a convenient situation for us to map err to reject and contents to resolve. Meaning we will call resolve(contents) if we were able to read the file. If we got back an error from readFile then we will call reject(err)
*/

const fsPromise = new Promise(executor); //we created a new Promise with the executor as defined above and assign it to fsPromise. basically fsPromise is a promisified version of fs.readFile (unfortunately with specified "abc.txt", utf8 etc. we should generalized it so that fsPromise can take filename and utf as arguments.)

//code below simply invokes fsPromist and runs the then catch depending on what is returned from the promise
const doAfterGood = (fileContents) => {
    console.log(JSON.stringify(fileContents));
    console.log("✔️ ❤️  -----end of original-----") //Emojis are supported natively on most systems now so you can copy them from Emojipedia, or use them on the web with a utf8 meta tag. 
    //You can also use the Windows key + dot/period shortcut anywhere in Windows
}
const doAfterError = (err) => {
    console.error('⚠️  ⛔  something went very wrong!!!!!', err);
}

fsPromise //invoke fsPromise to read the file
    .then(doAfterGood) //then invoke doAfterGood
    .catch(doAfterError) //if fsPromise returns errors invoke doAfterError

