//! need to npm install node-fetch to use fetch in node https://stackabuse.com/making-http-requests-in-node-js-with-node-fetch

const fetch = require('node-fetch');

/*
! https://www.youtube.com/watch?v=_9vgd9XKlDQ

! To use Async Await simply have the keyword async in front of the function where in the function, you will be making calls such as fetch that you want to make sure that you receive the results of those call BEFORE you invoke the followup functions.
*/

//syntax for post: https://stackoverflow.com/questions/29775797/fetch-post-json-data



const LoadData = async (_url) => {
    try{
        const rawResponse = await fetch(_url); 
        const jsonResponse = await rawResponse.json();
        console.log('rawResponse.ok: ', rawResponse.ok)
        return jsonResponse; //async function returns a promise
    }
    catch(err){
        console.error(err);
    }
    
}

const url = 'https://randomuser.me/api/?resughflts=1';
//because LoadData returns a promise to console log it we must:

LoadData(url).then( (data, error) => console.log('💖',data, error) );


