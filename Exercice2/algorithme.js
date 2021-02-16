

//the solution for Node JS - Algo Exercise

//the problem is solved in O(n) time. The idea is to keep track of three indexes, 
//current index (current), previous zero index (prev_zero) and previous to previous zero index (prev_prev_zero). 

//Traverse the array, if current element is 0, calculate the difference between current and prev_prev_zero (This difference 
//minus one is the number of 1s around the prev_zero). If the difference between current and prev_prev_zero is more 
//than maximum so far, then update the maximum. Finally return index of the prev_zero with maximum difference.


const findIndexOfZero = (arr) => {

    max_count = 0;              //stores maximum number of 1's (including 0)
    max_index = -1;             //stores index of 0 to be replaced
 
    prev_zero_index = -1;       //stores index of previous zero
    prev_prev_zero_index = -1;  //stores index of previous to previous zero

    //Traverse through the given array
    for(var current = 0; current < arr.length; current++){

        //If current element is 0, 
        //then calculate the difference 
        //between current and prev_prev_zero
        if (arr[current] == 0){

            //Update result if count of 
            //1s around prev_zero is more
            if(current - prev_prev_zero_index > max_count){
                max_count= current - prev_prev_zero_index;
                max_index = prev_zero_index;
            };

            //Update for next iteration 
            prev_prev_zero_index = prev_zero_index;
            prev_zero_index = current;
        };
    };

    //Check for the last encountered zero
    if(arr.length - prev_prev_zero_index >= max_count) max_index = prev_zero_index;

    //The result returned in max_index
    return max_index;
};

//Export the function to be used in app.js
module.exports = findIndexOfZero;
