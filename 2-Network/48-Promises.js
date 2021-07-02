const promisea = new Promise( (resolve, reject) => {
    setTimeout( () => {
        console.log("got the user");
        //resolve({ user: "ed" });
        reject(new Error("Error abc"));
    }, 2000);
} );

promisea.then(
    user => {console.log(user);})
    .catch(err => console.log(err.message))

