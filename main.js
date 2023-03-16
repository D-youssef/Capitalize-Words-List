/*
    Capitalize Words List
*/

function capitalizeLetters(words) {

    // we split first sentences to words
    var oldArray = words.split(' '),
        newArray = [];

    // to check for all words
    for (var i = 0; i < oldArray.length; i++) {

        // make first character to upperCase charAt(0).toUpperCase()
        // rest of word without first letter slice(1)
        newArray.push(oldArray[i].charAt(0).toUpperCase() + oldArray[i].slice(1));
        
    }

    return newArray.join(' ');
};

// for testing
console.log(capitalizeLetters('hello world'));

