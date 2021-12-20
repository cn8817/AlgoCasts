// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let count = 0 //make a counter that increases everytime there is a vowel
    const check = ['a', 'e', 'i', 'o', 'u'] //array contains letters that we want to check for

    for(let char of str.toLowerCase()){ //loop over each character, lowercase the string in case of uppercase vowels
        if (check.includes(char)){ // if the character we are iterationg over is inside the check array
            count++ //increase counter by 1 every time the condition is met
        }
    }

    return count
}

module.exports = vowels;
