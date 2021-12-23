// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//iterative solution O(n) linear run time
function fib(n) {
    const result = [0, 1] //first two values are always 0 and 1

    for(let i = 2; i<=n; i++){ // loop starting at the 2nd index since 0 and 1 are already declared
        const a = result[i - 1] //previous number
        const b = result[i - 2] //2nd previous number

        result.push(a+b) // add those two numbers to generate the next number
    }

    return result[n] //the number at index n
}

//recursive solution O(2^n) exponential solution very very bad run time...
function fib(n) {
   if (n < 2) { //first two numbers are 0, 1
       return n //return 0 or 1 
   }

   return fib(n-1) + fib(n-2) //finds fib(prev) + fib(2nd prev) and keeps looping until fib(1) + fib(2)
}


//memoization solution O(n)
const memoFib = function() {
const results = {} //makes a cache that memorizes each solution

function fib(n) {
    if (n <= 1) return n //returning the first two numbers 0, 1

    if (n in results) { // if the answer exists in the cache
        return results[n] // return the answer
    }
    else {
        results[n] = fib(n - 2) + fib(n - 1) // else we will add the answer into the cache
    }
    return results[n] // return the answer from the cache

}
}


module.exports = fib;
