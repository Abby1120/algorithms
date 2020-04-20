// Write a function that takes in a number and returns the factorial.
function factorialNumber(num) {
    let product = 1;

    for ( let i = 2; i <= num; i++ ) {
        product *= i;
    }

    return product;
}

console.log (factorialNumber(8));