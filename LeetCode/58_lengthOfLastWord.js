/**
 * @param {string} s
 * @return {number}
 */

//  Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.
var lengthOfLastWord = function (s) {
    s = s.trim().split(" ");
    return s[s.length - 1].length;
};

console.log(lengthOfLastWord("Hello World"));                     // Expected: 5
console.log(lengthOfLastWord("   fly me   to   the moon  "));     // Expected: 4
console.log(lengthOfLastWord("luffy is still joyboy"));           // Expected: 6