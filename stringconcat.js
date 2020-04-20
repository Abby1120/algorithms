// Write a function that takes a string from first name and last name.
function introduction(firstName, lastName) {
    const introduction = 'Hi, my name is ' .concat(firstName, " ", lastName, ".");

    return introduction;
}

function introduction2(firstName, lastName) {
    const introduction = 'Hi, my name is ' + firstName + ' ' + lastName + '.';

    return introduction;
}

function introduction3(firstName, lastName) {
    const introduction = 'Hi, my name is ${firstName} ${lastName}.';

    return introduction;
}

console.log(introduction('Abby', 'Gulla'));
console.log(introduction2('Abby', 'Gulla'));
console.log(introduction3('Abby', 'Gulla'));