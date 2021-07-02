//identify if a string s has only unique letters

function hasUniqueChars(s) {
    let uniq = true; //default it to being uniq
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) !== i) { //if the index not match then it is Not uniq
            console.log(s[i]); //debug
            uniq = false;
        }
    }

    return uniq;
}

console.log(hasUniqueChars('abcdef'));
console.log(hasUniqueChars('abbcdfef'));

