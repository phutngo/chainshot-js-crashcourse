/**
 * Removing Duplicates
We just learned about setting a number for our initial value in reduce.

Can we do something similar for an object, like an array? Sure can! 

In this code exercise, let's remove duplicates from an array.

 Flip to details to check out an example.

 Your Goal: Finish the function to remove all duplicates
Use the example provided in the details tab to guide you. You'll want to provide an initial value here that will eventually lead you towards your goal. Then you'll continue to accumulate non-duplicate numbers until you have an array that is full of only unique numbers.

 Curious how to find whether a value exists inside an array? Use the indexOf method: documentation.
 */
/**
 * Example
Goal: Remove duplicates within our numbers array
numbers: [2,3,2]
We're going to reduce our numbers above until we end up with an array that has no duplicates. We'll do this in three iterations:

Iteration 1
Accumulator: []
CurrentValue: 2
We start with an empty array and see that 2 is not inside it. We'll add it.

Iteration 2
Accumulator: [2]
CurrentValue: 3
We move to 3 and see it also is not inside our [2] array. Let's add it.

Iteration 3
Accumulator: [2,3]
CurrentValue: 2
We move to our final 2 and see that it is inside our [2,3] array. We will not add it this time.

Result
Final Value: [2,3]

All duplicates removed!

 Think Critically: What was our initial value in this example? Remember that the accumulator is initialized with this value!

Next Stage

 */
// numbers is an array full of numbers
// let's remove any duplicates and return it
// i.e. [2,2,3,5,1,3,4] => [2,3,5,1,4]
function removeDuplicates(numbers) {
    return numbers.reduce((accumulator, currentValue) => {
        if(accumulator.indexOf(currentValue) === -1) {
            accumulator.push(currentValue);
        }
        return accumulator;
    }, []);
}