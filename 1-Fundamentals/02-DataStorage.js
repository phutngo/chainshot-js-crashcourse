//checks if the first letter of string is x regardless of case - aka x or X
function startsWithX(string) {    
    if (string.toLowerCase()[0] === 'x') {
        return true;
    } else {
        return false;
    }
}

//checks if the last letter of string is x or X
function endsWithX(string) {
    if (string.toLowerCase()[string.length-1] === 'x') {
        return true;
    } else {
        return false;
    }
}

//Complete the function isAllX to determine if the entire string is made of lower-case x or upper-case X. Return true if they are, false if not.
function isAllX(string) {
    let stringLower = string.toLowerCase();
    let countNonX = 0;

    for (let i = 0; i <string.length; i++) {
        if (stringLower[i] !== 'x') {
            countNonX = countNonX + 1;
        }
    } 
    
    if (countNonX === 0) {
        return true;
    } else {
        return false;
    }
}

console.log('isAllX ', isAllX("Xx")); // true
console.log('isAllX ', isAllX("xAbX")); // false)

// returns the FIRST index location of 'x'
function findFirstX(string) {
    return string.indexOf('x');
}

console.log('findFirstX ', findFirstX('abcx')) // 3

// slice  a string at the first x and returns the longer half
function splitAtX(string) {
    let splitLocation = string.indexOf('x');
    let first = string.slice(0, splitLocation); //from beginning to split Location x not including it
    let second = string.slice(splitLocation+1); //from splitLocation not including the x to end 
    
    if (first.length > second.length){
        return first;
    } else if (first.length < second.length) {
        return second; 
    } else {
        return `${first} is same length as ${second}`;
    }
}

console.log('splitAtX: ', splitAtX('abcxyz') )

