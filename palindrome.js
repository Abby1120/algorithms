// Write a function that takes in a string that ignores special characters
// and underscores, is case insensative, ignores spaces and see if it is a palindrome.
function isPalindrome(str) {
    let forwardStr = str.toLowerCase().replace(/[\W_]/g, '');
    let reverseStr =forwardStr.split('').reverse().join('');

    return forwardStr ===reverseStr;
}

console.log(isPalindrome("A man, a plan, a canal. Panama"));
console.log(isPalindrome('My age is 0, 0 si ega ym.'));
console.log(isPalindrome('Whatcha Want'));
console.log(isPalindrome('.0_0 : /-\ : 0-0'));