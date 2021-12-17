// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const map = {} //create object with key/value pairs
    let max = 0
    let maxChar = ''

    for(let char of str){ //looping thru each character of the string (use 'of' for arrays and strings)
        if(!map[char]){ //if the key doesnt exist in the object  
            map[char] = 1 // add a key to map and make its value = to 1
        } else{ //if a key exists in the object
            map[char]++ //increment the value by one
        }
    }

    for(let char in map){ //loop thru the object (use 'in' for objects)
        if(map[char] > max){ //if the value of the key is greater than the max value
            max = map[char] //make max = to the key's value
            maxChar = char //maxChar is now = to the character that has the highest value
        }
    }
    return maxChar
}

module.exports = maxChar;
