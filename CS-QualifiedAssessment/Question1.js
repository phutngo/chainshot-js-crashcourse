//Given a number, sum all numbers below it that are multiples of 3 or 5.

function solution(number){
    if (number == null) return; //guard rail
    //guard against strings - type script would be good here
    let temp = []; //holds the multiples of 3 and 5. this is not needed but helps with debugging
    let acc = 0; //holds the running sum
    
    for (let i = 0; i < number; i++ ){
        if ( (i % 3 === 0) || (i % 5 === 0) ) {
            temp[i] = i;
            acc = acc + temp[i];
        }
    }
    console.log(temp);
    return acc;
}

console.log(solution(10));

//rewrite the above using filter







