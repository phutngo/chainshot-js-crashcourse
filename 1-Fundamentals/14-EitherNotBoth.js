/**
 * Either Not Both (same as XOR)
Write a function eitherNotBoth that takes in a number and returns true if the the number is divible by either 3 or 5, but not both. Return false otherwise.
 */
function eitherNotBoth(num) {
    if ((!((num % 3) === 0)&&((num % 5) === 0)) || ((num % 3) === 0) && !((num % 5) === 0)) {
        return true; //true
    }

    return false
}

console.log(eitherNotBoth(9));