// Write a function that takes in a string and reverses its value.

function strReverse(word) {
    let reversedWord = word.split('').reverse().join('');
    
    return reversedWord;

}

console.log(strReverse('codecat'))

// or

function strReverse2(word) {
    let reversedWord = '';

    for(let i = word.length - 1; i >= 0 ; i--) {
        reversedWord += word[i];
    }

    return reversedWord;
}

console.log(strReverse2('babyshark'));