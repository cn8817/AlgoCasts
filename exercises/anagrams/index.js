// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB) //returns true if stringA is the same as stringB
}

//helper function (do this first)
function cleanString(str){
    return str
    .replace(/[^\w]/g, '') //removes any spaces and punctuations from the string
    .toLowerCase() //makes string all lowercase
    .split('') //turns str into array
    .sort() //sorts array by alphabetical order
    .join('') //turns array back to string
}

module.exports = anagrams;
