/**
 * Array Map Index
When using map we also get access to the position of the element in our function.

[10, 20, 30].map(function(el, i) {
    console.log(i);
});
This will log 0, 1, and 2 which are the indexes for 10, 20 and 30 respectively.

One way that we can use the index is when we want to modify an element based on it's position.

 Your Goal: Add 10 to the first 3 Players
Let's modify our addScore function to only add 10 points to the first 3 players.

Be careful on this one! The index passed into our function will be zero-based, which means it starts at 0. Also, be sure to always return something inside the mapped function or the element will be undefined.
 */


[10, 20, 30].map(function(el, i) {
    console.log(i); //the anonymous function that is the argument of map simply console.log
});

function addScore(players) {
    let newPlayers = players.map( (player, i) => { //!the map method passes in the array element player and the index of that element i into our anonymous function. Below, our anonymous function returns object based on what was passed in and some logic that we define.
        if (i <=2) {
            return {
                id: player.id,
                score: player.score + 10
            }
        } else {
            return {
                id: player.id,
                score: player.score
            }
        }
    })
    return newPlayers;
}

