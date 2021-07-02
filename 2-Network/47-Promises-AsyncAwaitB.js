//another Async example
/*
function loginUser(email, password){
    setTimeout (() => {
        console.log("now we have the data");
        return {userEmail: email};
    }, 1500);
}

const user = loginUser("ptn123@gmail.com", 123456);
console.log(user); // this will be undefined because the loginUser doesn't return the data yet.

console.log("Finish");
*/

//fix the above with callback
function loginUser(email, password, callback){
    setTimeout (() => {
        console.log("now we have the data");
        callback( {userEmail: email} ); //invokes the passed in callback funct passing in the the email
    }, 1500);
}


const exampleuser = loginUser("ptn123@gmail.com", 123456, (usere)=>{
    console.log(usere); //this function takes the passed in object from the main calling function and consoles log it.

});

console.log("Finish");