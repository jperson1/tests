/**
 * @param {number} x
 * @return {boolean}
 */

// Given an int x, return true if x is a palindrome number.
 var isPalindrome = function(x) {
    var forward = String(x);
    var backward = forward.split('').reverse().join('');

    if (forward == backward){
        return true;
    }
    return false;
};

console.log(isPalindrome(12321));
console.log(isPalindrome(12345));
console.log(isPalindrome(21));
console.log(isPalindrome(1111));