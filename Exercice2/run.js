//Importing our algorithm 
const findIndexOfZero = require('./algorithme');



//Get the input string and cast it to an array with split
let arr = process.argv[2].split(',');

//Print the results in the teminal
const indexOfZero = findIndexOfZero(arr);
console.log(`The index of the 0 to be replaced is : ${indexOfZero}`);