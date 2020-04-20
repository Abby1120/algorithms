// fizzbuzz algo
// Write a function that if number is 3 or greater and is divisable by 3 returns 'fizz',
// by 5 returns 'buzz', by both returns 'fizzbuzz', or none ''.

function fizzBuzz2(num){
    let word = '';

    if ( num % 3 === 0 ) {
        word = word.concat('fizz');
    }

    if ( num % 5 === 0) {
        word = word.concat('buzz');
    }

    return word;
}

console.log(fizzBuzz2(15));

// or

function fizzBuzz(num) {
    if(num % 3 === 0 && num % 5 === 0) {
        return 'fizzbuzz';
    }
    else if ( num % 3 === 0) {
        return 'fizz';
    }
    else if (num % 5 === 0) {
        return 'buzz';
    }

    return '';
}

console.log(fizzBuzz(3));
console.log(fizzBuzz(15));
console.log(fizzBuzz(10));
console.log(fizzBuzz(8));