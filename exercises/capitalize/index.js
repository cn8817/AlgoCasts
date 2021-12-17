// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    const words = [] //make empty array

    for(let word of str.split(' ')){ // loop over each word of the string, split each word at the space so we only have an array of words ex: ['hello', 'there']
        words.push(word[0].toUppercase() + word.slice(1))
        // push the changes into the words array
        // uppercase the first letter of the word (index 0)
        // slice takes every letter of the word from index 1 onwards
    }

    return words.join(' ') // join back each word with a space to form a sentence string
}

module.exports = capitalize;
