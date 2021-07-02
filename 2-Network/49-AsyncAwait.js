//! a better way instead of promises is to do async await
//! async await is syntactic sugar to implement promises 
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await

function hello1() { return "Hello" };
console.log(hello1())

async function hello2() { return "Hello" }; //async functions always return a Promise object
console.log(hello2()); //returns a Promise object with 'Hello' in it.

//!await can be put in front of any async promise-based function to pause your code on that line until the promise fulfills, then return the resulting value.

//You can use await when calling any function that returns a Promise, including web API functions.

//example fetch
fetch('coffee.jpg')
.then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.blob();
})
.then(myBlob => {
  let objectURL = URL.createObjectURL(myBlob);
  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
})
.catch(e => {
  console.log('There has been a problem with your fetch operation: ' + e.message);
});