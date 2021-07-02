//PACKING - convert an array of integers to binary then pact it back to a single number


const exr = [24, 85, 0];

function arrayPacking (integers) {
    console.log(`Original array of integers: `, integers);
    const binArray = integers.map( (x) => x.toString(2) ); //convert the integers to binary
    console.log(`Integers converted to binary: `, binArray);
    let pactBin = ''; //represent the combined binaries
    let pactFin = 0; //represent the final decimal
    let zeros = 0;
    for (let i = 0; i < integers.length; i++){ //for each integer in the integers array
        zeros = 8 - binArray[i].length;          //determines the number of missing 0 in that integer element
        for (let j = 0; j < zeros ; j++) {       //for each missing zero add in the missing zero to the integer element
            binArray[i] = '0' + binArray[i]
        }
    }
    console.log(`binArray with zeros prefixed to length of 8:`, binArray)

    reversedBinArray = binArray.reverse();       //reverses the array
    console.log(`reversedBinArray: `, reversedBinArray)
    for (i = 0; i < reversedBinArray.length; i++){  //flatten and combine the array elements
        pactBin = pactBin + reversedBinArray[i];
    }
    console.log(`flatten and combined: `, pactBin);
    pactFin = parseInt(pactBin, 2); //turns the binary back to decimal
    console.log(`converted to decimal: `, pactFin)
    return pactFin;
}

console.log(arrayPacking(exr));