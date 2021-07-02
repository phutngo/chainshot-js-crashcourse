/*
JSON
JavaScript Object Notation or JSON is a format for transferring JavaScript data.

Don't worry! It's much like object syntax that we're already used to, except in string form.

Let's see some JSON:

const person = '{"name":"Jim"}';
The value stored in person is a string! It looks quite a bit like an object. And, in fact, it can be quite easily turned into an object!

The advantage of JSON is we can use it to send data across a network. 

We can get the same JSON as above by using JSON.stringify on an existing object:

const person = JSON.stringify({ name: "Jim" });

console.log(person); // {"name":"Jim"}
 See? The result is the same as the JSON we created in the first example.

 Your Goal: To JSON
Given an object, turn it into JSON and return the resulting string.
*/
function toJSON(obj) {
    return JSON.stringify(obj);
}

let exampleObj = { name: "Jim" };
console.log('as an Object: ',exampleObj)
console.log('as a String: ', toJSON(exampleObj));

