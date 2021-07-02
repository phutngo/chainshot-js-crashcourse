const fetch = require('node-fetch');

//! running multiple fetches in parallel
const url = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
]

// for loop version
for (let i = 0; i < 3 ; i++){
fetch(url[i])
  .then((response) => response.json())
  .then((json) => console.log('💖',json));
}

// .forEach version
url.forEach( (el) => {
    fetch(el)
    .then((response) => response.json())
    .then((json) => console.log('😀',json))
})

//note the returned results are not necessarily in order. This is intentional since we want the results to return in parallel.

//if we want to take an action iff after all the results are returned. Say we want a function to sum up all the posts id of (all 6 posts) then we can use Promise.all 
//https://stackoverflow.com/questions/38180080/when-to-use-promise-all


