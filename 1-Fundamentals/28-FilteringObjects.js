/**
 * Filtering Objects
We can filter objects, just like we filter numbers, booleans and strings!

Let's say we have a list of baseball teams:

const teams = [
    { name: 'Mets', wins: 86 },
    { name: 'Braves', wins: 97 },
    { name: 'Dodgers', wins: 106 }
];
If we wanted to grab the number of teams with less than 100 wins, we could do so with filter:

const lessThan100 = teams.filter(function(team) {
    return team.wins < 100;
});
 Now lessThan100 will include the objects for both the Mets and Braves. Better start winning more games! 

 Your Goal: Filter the Top Students
Find students whose score is at least 90.

const students = [
    { name: 'David', grade: 90 }, 
    { name: 'Daisy', grade: 100 },
    { name: 'Darcie', grade: 80 }
];

const a = topStudents(students);

console.log(a); 
*/
/*
*  [
*    { name: 'David', grade: 90 }, 
*    { name: 'Daisy', grade: 100 }
*  ]
*/
function topStudents(array) {
    let filtered = array.filter( (objel) => {
        return (objel.grade >= 90);
    }) 

    return filtered;
}

