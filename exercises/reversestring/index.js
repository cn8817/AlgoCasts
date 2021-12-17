// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let reversed = ''
    for(let char of str){ //loop thru each character in the string
        reversed = char + reversed // try it yourself if you dont understand how it works
    }
    return reversed
}

module.exports = reverse;
