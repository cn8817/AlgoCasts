// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    return str
    .split('') // splits each character of the string into an array value
    .every((char, i) => { //for every character and we need to grab the index
        return char === str[str.length - i - 1] // if the character is equal to the value at the last index the func returns true
        // str.length - i - 1 means that at index 0 we will grab the last value and at index 1 we will grab second to last value etc...
    })
}

module.exports = palindrome;
