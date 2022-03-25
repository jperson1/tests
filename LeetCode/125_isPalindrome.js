/**
 * @param {string} s
 * @return {boolean}
 */

//  A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. 
//  Alphanumeric characters include letters and numbers.
//  Given a string s, return true if it is a palindrome, or false otherwise.
var isPalindrome = function (s) {
    // /[^a-z0-9]/gi
    // tags all excluding (^) a-z and 0-9. 'g' for global, 'i' for case insensitive
    s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    var reversed = s.split('').reverse().join('');
    return s == reversed;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));    // Expected: True
console.log(isPalindrome("race a car"));                        // Expected: False
console.log(isPalindrome(" "));                                 // Expected: True
