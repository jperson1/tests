/**
 * @param {string[]} strs
 * @return {string}
 */

// Given an array of strings, return the longest common prefix. If none, return the empty string.
var longestCommonPrefix = function (strs) {
    let c = '', p = '';

    for (let i=0; i<strs[0].length; i++){
        c = strs[0].charAt(i);
        for (let j=1; j<strs.length; j++){
            if (strs[j].charAt(i) != c){
                return p;
            }
        }
        p = p + c;
    }

    return p;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["pig", "piglet", "piggy"]));