/*
Async Await
Another useful tool in the asynchronous JavaScript toolbelt is async/await.

With these two keywords we can handle promises line-by-line like synchronous code:

async function getData() {
    const result = await serverCall();

    // this will not run until serverCall resolves/rejects
    return result;
}
 In this example serverCall returns a promise and the result is the resolved value.

 !The return line does not run until after the serverCall promise is complete. This is the case for anything after the await line. See details for further explanation.

The above example is functionally equivalent to:

function getData() {
    return serverCall().then((result) => {
        return result;
    });
}
In both cases, getData returns a promise and the promise resolves with the result.

 You can think of async as a way of denoting that a function will return a promise. For full documentation on async see here.

 Your Goal: Relay the Results
We have a function handleResults which should retrieve a patient's results from a lab, send them to the patient, and record the response in logs.

Relay

The three functions have been imported for you. Each function returns a promise, so it can be used with async/await. You'll need to call these in order:

Pass the patientId to getResults. This will resolve with results.

Pass the patientId and results (in that order) to sendResults. This will resolve with response.

Pass the response to logResponse. There is no return value here. You can choose to either return the promise from logResponse or use await so the function will not resolve until after logResponse is complete.

 Notice that the async keyword has already been added to the handleResults function. This will allow us to use await within the function.
*/

/*
Async Keyword
The async keyword will make a function return a promise. Even if we were to make a simple function like this:

async function test() {

}
By adding async in front, this will now return a promise when invoked.

This allows us to write asynchronous code inside of the test function as if it were synchronous.

For example:

async function test() {
    await getServerData();

    return 3;
}
 We won't return 3 until after the promise returned from getServerData resolves.

This would be a problem if test was called and it expected the return value immediately:

const three = test();
Is the value of three equal to 3 in this case? 

No! It is a promise:

console.log(three); // Promise 

// we should try to name our objects appropriately
const threePromise = three;
threePromise.then(function(data) {
    console.log(data); // 3
});
By wrapping this function test in a promise, it gives us a special environment where we can write code that looks synchronous while allowing it to be asynchronous. This is the power of async/await.
*/

const { getResults } = require('./lab');
const { sendResults } = require('./messaging');
const { logResponse, logError } = require('./logs');

async function handleResults(patientId) {
    const results = await getResults(patientId);
    const response = await sendResults(patientId, results);
    return logResponse(response); //here we are returning the promise from logResponse
} 

module.exports = handleResults;

/*
TRY CATCHING ASYNC/AWAIT
The keywords async/await give us a nice interface to use promises. Keep in mind what is going on underneath the hood! We still have a promise that can both be resolved and rejected.

In the last stage we only handled the resolve.

How do we handle when the case where the promise rejects? 

We can use try/catch!

async function getData() {
    try {
        const data = await callServer();
    }
    catch(ex) {
        // this runs if the callServer promise rejects 
        console.log(ex);
    }
}
 If the callServer promise were to reject here, we would catch the exception and then log it to the console.

 Your Goal: Catch an Error
If an error is thrown in any of the asynchronous functions we called in the last stage, let's catch it.

Once we have the exception, pass it to logError.
*/

const { getResults } = require('./lab');
const { sendResults } = require('./messaging');
const { logResponse, logError } = require('./logs');

async function handleResults(patientId) {
    try {
    const results = await getResults(patientId);
    const response = await sendResults(patientId, results);
    await logResponse(response);
    }
    catch(err){
        logError(err);
    }
    
    return;
}

module.exports = handleResults;

