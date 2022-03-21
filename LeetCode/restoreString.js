/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */

//  You are given a string s and an integer array indices of the same length. 
//  The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
//  Return the shuffled string.
var restoreString = function (s, indices) {
    s = s.split('');
    var sol = [];

    for (var i = 0; i < s.length; i++) {
        sol[indices[i]] = s[i];
    }

    return sol.join('');
};

console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));
console.log(restoreString("abc", [0, 1, 2]));