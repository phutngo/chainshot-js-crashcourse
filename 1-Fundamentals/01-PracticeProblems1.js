//to run a plain .js file simply type 'node <filename>'

function checkNumber(num) { //checkNumber = (num) => {}
    if (num > 0) {
        return 'positive';
    } else if (num < 0) {
        return 'negative';
    } else {
        return 'zero';
    }
}

//arrow function format below
const checkNumberArrow = (num) => {
    if (num > 0) {
        return 'positive';
    } else if (num < 0) {
        return 'negative';
    } else {
        return 'zero';
    }
}

console.log(checkNumber( -3 ) ); // negative
console.log(checkNumber( 0 ) ); // zero
console.log(checkNumber( 2 ) ); // positive

console.log(checkNumberArrow( -3 ) ); // negative
console.log(checkNumberArrow( 0 ) ); // zero
console.log(checkNumberArrow( 2 ) ); // positive

function maxSum(num) {
    let i = 0;
    let sum = 0;
    for (i = 0; i <= num; i++) {
        sum = sum + i;
    }
    return sum;
}

console.log(maxSum( 5 ) ); // 15