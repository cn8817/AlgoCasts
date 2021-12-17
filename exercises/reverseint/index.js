// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let reversed = n
    .toString() //turn the number to a string
    .replace('-', '') //replaces negative with empty string to remove it completely
    .split('') //split only works with strings, ex: '51' = ['5', '1'] bc of split
    .reverse() //reverse the array
    .join('') //join each array value back to a string

    return parseInt(reversed) * Math.sign(n)
    // parseInt turns string to a number and Math.sign deals with any negatives
}

module.exports = reverseInt;
