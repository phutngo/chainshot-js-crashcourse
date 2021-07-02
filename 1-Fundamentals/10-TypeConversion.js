/*Strings to Numbers
In JavaScript there are several ways to convert a string into a number. First, there is explicit conversion:

const string = "2"
console.log(Number(string)); // 2

const string = "hello"
console.log(Number(string)); // NaN
 You can also convert strings to numbers with parseInt and parseFloat. Be aware these two methods will chop off non-numeric characters at the end of the string.

And there is implicit conversion:

const string = "2";
console.log(+string); // 2

const string2 = "hello";
console.log(+string2); // NaN
You can see with the + operator the string is implicitly converted to a number.

 Best partice is to use explicit conversion in most cases. Explicit conversion will make your intentions obvious to your fellow programmers when they review/maintain your code! 

 Your Goal: Convert to Number
Given a string, convert it to a number.

If the string is not a number, return 0.

 You will be able to tell if the string is not a number if it converts to NaN. It might be helpful to know that NaN is falsey! Additionally, you can use the typeof operator.
*/

/*
ParseInt and ParseFloat
Strings can be converted to numbers with both parseInt and parseFloat. These functions will not only convert numbers, they will chop off any extra non-numeric characters at the end:

const result = parseInt("12px"); 

console.log(result); // 12
This only works with non-numeric characters at the end of the string. If the string starts with non-numeric characters it will return NaN:

const result = parseInt("abc123");

console.log(result); // NaN
 NaN stands for "Not A Number", and you can learn more about it in the MDN Documentation. Quite perplexingly perhaps, typeof NaN will evaluate to "number". 

A difference between the parseInt and parseFloat functions appears when working with floating point numbers:

const float = 12.24;

console.log(parseInt(float)); // 12

console.log(parseFloat(float)); // 12.24
 As might be suspected, parseFloat properly parses floating point numbers.

typeof
The typeof operator is a convenient way of checking a value's type.

It's easiest to demonstrate with a few examples:

console.log( typeof 1 ); // number
console.log( typeof "1" ); // string
console.log( typeof {} ); // object
Next Stage
*/
function toNumber(string) {
    let num = Number(string);
    if (!Number.isNaN(num)){
        return num;
    } 
    return 0;
}

console.log('typeof(NaN): ', typeof(NaN));
console.log(toNumber('abc'));

/*TO STRING
There are several ways to convert to a string in JavaScript. There are explicit methods:

const a = 123;

console.log(a.toString()); // "123"
console.log(String(a)); // "123"

console.log(false.toString()); // "false"
And then there are implicit conversion:

console.log(123 + ""); // "123"
console.log(true + ""); // "true"
JavaScript does its best to interpret the intention here by coercing these values to strings.

It should be noted that if the string had a number in it, they would still be added together as strings:

console.log(2 + "2"); // "22"
 Notice that the result is 22 here, not 4! The expression 2 + 2 evaluates to 4. However, when one of the values is a string, both are first converted to a string and then merged together.

 Your Goal: Combine Two Values
Given two values a and b, combine them together as strings and return the result. The values may be a number, a boolean or a string.

 All 3 of the types mentioned above have the method .toString() available.
 */

 function combineToString(a, b) {
    return (String(a)+String(b));
}

/*
Boolean Conversion
Just like number and string conversion, we can convert to boolean explicitly:

console.log(Boolean(2)); // true
console.log(Boolean("")); // false
 We can also use the logical NOT operator ! to convert boolean, flip the value, and ! again to flip it back. See Details.

When converting to booleans, values that are falsey are converted to false: false, 0, "", null, undefined, and NaN. All other values are converted to true.

Situations where values are implicitly converted to booleans include if conditionals:

if(3) {
    console.log('3 is truthy!');
}
This would hit the console.log because 3 is, in fact, truthy.

 Your Goal: Is it Truthy?
Given some value a return whether or not the value is truthy.

 Remember that truthy values are any value excluding falsey values: false, 0, "", null, undefined, and NaN.
*/
function isTruthy(a) {
    return !!a;
}

/*
Loose Equals
In previous lessons we discussed strict equals ===. We know that this operator compares two values and returns whether or not they are the same.

For instance:

console.log(3 === 3); // true
console.log("apple" === "orange"); // false
When the values are different types, the === operator will always evaluate to false:

console.log("2" === 2); // false
However, the loose equals == comparison operator will attempt type conversion to compare values!

console.log("2" == 2); // true
 Many discourage the use of == in general. For one thing it is less performant because it requires changing a value's type. Additionally, it can lead to confusing results in some cases where type conversion is unexpected. 

 Your Goal: Is Loosely Equal?
Return true if a and b are loosely equal to each other. If not, return false.
*/
function looseEquals(a, b) {
    if (a==b) {return true;}
    return false
}

