/*
In JavaScript, objects start with a open curly-brace { and end with a close curly-brace }. In between these braces we can put key-value pairs.
*/
const person = {
    hairColor: 'brown',
    toes: 10,
    grumpy: true, //the comma here on the last key value pair is optional
}; //the semicolon here is optional

console.log( person.toes ); // 10
console.log( person.hairColor ); // brown

//two ways to RETRIEVE values
console.log( person.hairColor ); // brown
console.log( person['hairColor'] ); // brown //note that the key is in single quotes

//you can even supply a variable in the brackets []!

//defines an order object
const order = {
    pizzas: 3,
    extraCheese: true,
    deliveryInstructions: "Round the back, please!",
}

//Given an array of pizza orders, return the total number of pizzas ordered.
//The orders are an array of objects, each with pizzas key inside:
function numberOfPizzas(orders) {
    let total = 0;
    for (let i = 0; i < orders.length; i++){
        total = total + orders[i].pizzas;
    }
    return total;
}

const orders = [
    { pizzas: 3 },
    { pizzas: 5 },
    { pizzas: 10 }
];

let totalPizzas = numberOfPizzas(orders);
console.log( totalPizzas ); // 18

/* ENUMERATION
if we ever want to change what suit corresponds to which value, we only need to change it once in CARD_SUITS

This type of object is commonly referred to as an Enumeration. As with any pre-defined constant, it's common to use UPPER_SNAKE_CASE for enumerations in JavaScript.
*/
const CARD_SUITS = {
    DIAMONDS: 0,
    HEARTS: 1,
    SPADES: 2,
    CLUBS: 3
}

const card = {
    suit: CARD_SUITS.HEARTS,
    value: 5
}

console.log(card)

//Given an object, find the number of keys inside the object. Return this number.
function numberOfKeys(object) {
    return Object.keys(object).length //Object.keys(object) returns an array of keys. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
}

