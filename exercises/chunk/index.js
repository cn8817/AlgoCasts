// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const chunked = [] //create the parent array
    for(let num of array){ //looping over each number in the array
        let last = chunked[chunked.length - 1] // last is equal to the last subarray in the array
        if(!last || last.length === size){ //if there is no subarray or the subarray has met its capacity
            chunked.push([num]) //push a new subarray with the number we are currently iterating over into the parent array
        } else{
            last.push(num) //if a subarray exists and it hasnt met its capacity, push the num into the subarray
        }
    }
    return chunked

}

module.exports = chunk;
