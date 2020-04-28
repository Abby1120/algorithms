// Write a function that takes in a string and returns the length of the longest string.
function longestWordLength(str) {
    let longestLength = 0;
    let strArray = str.split(' ');

        strArray.forEach((word) => {
            longestLength = longestLength < word.length ? word.length : longestLength;
        });

    return longestLength;
}


console.log(longestWordLength('My daughter is Christine'));
console.log(longestWordLength('My mother is Maureen'));
console.log(longestWordLength('I am Abby'));

// or output the actual word that's the longest in the string

function longestWordLength2(str) {
    let longestLength = str.split(' ').sort((word1, word2) => {
        return word2.length - word1.length;;

    })[0];

    return longestLength;
}

console.log(longestWordLength2('My daughter is Christine'));
console.log(longestWordLength2('My mother is Maureen'));
console.log(longestWordLength2('I am Abby'));