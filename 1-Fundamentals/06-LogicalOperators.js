//https://www.chainshot.com/intro/5c492009e714340017be6e1d5db48af5a54be5305b6b32e7/

//* Logical OR or DEFAULT operator
const message = WELCOME_MESSAGE || "Hello there!";

//If user.age is undefined or 0 we will default to 99. For that matter user.age could be any falsey value and it would default to 99.
const age = user.age || 99;

/*We also want double to be able to handle when x is undefined.
Example:
const result = double(); 
console.log(result); // 0
*/
function double(x) {
    return ((x * 2) || 0);
}

//* && is Logical AND or GUARD operator
//We can use the operator to guard against run-time exceptions (or errors) when dealing with falsey values.
//https://seanmonstar.com/post/707078771/guard-and-default-operators

const user = { name: 'bob' }
console.log(user && user.name); // bob

//this throws a runtime error
//const user2 = undefined;
//console.log(user2.name);

//instead of runtime error, this shows 'undefined'
const user2 = undefined;
console.log(user2 && user2.name); // undefined

//The function friendName currently retrieves the name property from the friend.
//The problem is, sometimes friend is undefined. When this is the case, let's return undefined without throwing an exception.
function friendName(friend) {
    return (friend && friend.name); //friend resolves to true when it has value underneath and then friend.name returns
                                    //friend resolves to undefined. this is weird that the whole thing does not return a boolean
}

//todo https://dmitripavlutin.com/7-tips-to-handle-undefined-in-javascript/

//* NOT (!) logical operator
// It will also flip truthy and falsey values:
console.log(!2); // false
console.log(!undefined); // true

/*
 If you apply the negation operator to a truthy or falsey value twice you'll wind up with the corresponding boolean value. Since 2 is a truthy value, !!2 will evaluate to true.
*/

