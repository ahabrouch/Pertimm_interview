//Importing our algorithm 
const findIndexOfZero = require('./algorithme');


//Provided Test cases (cases mentionned in the mail)
let testCases = [
    arr1 = [1,0,0,1],   // output is 2
    arr2 = [1,0,0,0],   // output is 1
    arr3 = [0,0,0,0],   // output is 3
    arr4 = [0,1,0,1,0,1],   // output is 4
    arr5 = [0,0,0,0,0,1],   // output is 4
    arr6 = [0,0,0,0,1,1],   // output is 3
    arr7 = [0,0,0,1,0,1],   // output is 4
    arr8 = [1,1,0,1,1,0,1,1],   // output is 5
    arr9 = [1,1,1,0,0,1,0,0,1,1],   // output is 3
    arr10 = [1,1,1,0,1,1,0,1,1,1],  // output is 6
    arr11 = [1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1] // output is 10
];


// Simple function just to run the test cases
const test = () => {

    for(var arrNumber = 0; arrNumber < 11; arrNumber++){
        console.log(`Array number : ${arrNumber}`);
        console.log(testCases[arrNumber]);
        let indexOfZero = findIndexOfZero(testCases[arrNumber]);
        console.log(`the index to be replaced is : ${indexOfZero}`);
        console.log("-----------------------------------------------");
    };
};

test();