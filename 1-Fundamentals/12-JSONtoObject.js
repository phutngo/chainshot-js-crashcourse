/**
 * Valid JSON
In the last stage we focused on turning an object into JSON. We can also do the reverse, turning JSON back into an object.

Let's say that some other machine sent us JSON over a network:

const itemJSON = `{
    "type": "food",
    "edible": true,
    "quantity": 2
}`
 You'll notice that that the keys type, edible and quantity are all within double-quotes. This is required in JSON. Without it, this would not be valid JSON.

 We can parse the above JSON to turn it into an object:

const item = JSON.parse(itemJSON);

console.log(item.type); // food
console.log(item.edible); // true
Now we can use the . operator like with any other JavaScript object!

 Your Goal: Create valid JSON
Create JSON that can be parsed to a person object with 3 properties:

name: with any string value
age: with any number value
isReal: with any boolean value
An example of parsing the personJSON should work like this:

const person = JSON.parse(personJSON);

console.log(person.name); // "Harry Potter"
console.log(person.age); // 18
console.log(person.isReal); // false
 Have fun with this! Got a favorite fictional character? 

 JSON can be pretty strict! If you get SyntaxError: Unexpected token, you can look up JSON rules on MDN
 */

 const personJSON = `
 {
     "name": "Phu",
     "age": 41,
     "isReal": true
 } 
`;