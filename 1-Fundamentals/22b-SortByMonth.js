/**
 * Sorting by Month
Already provided for you is a list of MONTHS. These months are sorted from the beginning of the year (JAN) to the end of the year (DEC). 

What we need to do is sort an array of events by the month they are occurring in. Let's say we have the following events:

[{ event: 'dance', month: 'MAR' },
 { event: 'farmers market', month: 'JUN' },
 { event: 'parade', month: 'JAN' }]
The parade is the first event in the year, starting in January. Following that is the dance in March and the farmers market in June.

We need the order of these events to become:

[{ event: 'parade', month: 'JAN' },
{ event: 'dance', month: 'MAR' },
{ event: 'farmers market', month: 'JUN' }]
 Now everything is in the proper order!

 Your Goal: Sort the Events
Given the array of events, sort them by the month that they occur in and return the sorted array.

Each object in the events array will have properties event and month just like in the example shown above.

 To find which events comes first you'll need to see where it belongs in the MONTHS array. You can use the array indexOf method to find where it belongs.
 */

 /**
  * Array.prototype.indexOf
On the Array prototype is the method indexOf.

This method will return either a number greater than or equal to zero, indicating the index of the element, or negative 1, indicating it could not be found.

Let's see some examples:

const MONTHS = ["JAN", "FEB", "MAR"];

console.log( MONTHS.indexOf("JAN") ); // 0
console.log( MONTHS.indexOf("MAR") ); // 2

console.log( MONTHS.indexOf("go fish") ) // -1
 As you can see both "JAN" and "MAR" were found and their respective indexes were returned. The string "go fish" was not found so -1 was returned.

It's worth nothing that indexOf is case sensitive!

const fruit = ["apples", "oranges"]

console.log( fruit.indexOf("APPLES") ); // -1
  */

/** https://www.sitepoint.com/sophisticated-sorting-in-javascript/#:~:text=The%20comparison%20function%20itself%20accepts,being%20compared%20in%20each%20operation.&text=if%20the%20function%20returns%20less,zero%2C%20sort%20b%20before%20a
 * 
 //! If a and b are themselves arrays, well, directly comparing arrays using mathematical evaluation won’t produce the results we want; but we can compare their inner values and do the sort with them. This is how we sort multi-dimensional arrays, using a value from each inner array as the sort criterion. All the other inner values just ‘come along for the ride’, as it were, and this way we can sort arrays containing a mixture of values. The following example will sort the matrix by the number of sides on each shape:
 */

const MONTHS = [
    'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
    'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
];

function sortByMonth(events) {
    events.sort( (a, b) => {
        return (MONTHS.indexOf(a.month) - MONTHS.indexOf(b.month)) //if a - b is negative then it is ascending - meaning small index first 
        }
    )
    return events; //return the sorted events back out of the function
}

let exampleEvents = [
    { event: 'haunted hayride', month: 'OCT' },
    { event: 'holiday party', month: 'DEC' },
    { event: 'picnic', month: 'SEP' },
    { event: 'dance', month: 'MAR' },
    { event: 'snowball fight', month: 'FEB' },
    { event: 'farmers market', month: 'JUN' },
    { event: 'parade', month: 'JAN' }
]

console.log(exampleEvents);
 
let sortedEvents = sortByMonth(exampleEvents);
console.log(sortedEvents);