/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */

//  Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.
//  For any two binary numbers, the result of the AND's will turn the rightmost numbers to zero. 
//  The bitwise AND of all the numbers in the range will be longest common prefix (the numbers that remain unchanged when moving through the range).
//  If the length of the binary numbers are different, the result of all the AND's will be zero.
var rangeBitwiseAnd = function (left, right) {
    // Take to binary 32-bit representaion
    left = (left >>> 0).toString(2).split('');
    right = (right >>> 0).toString(2).split('');

    // If binary values are different length, resultant value will be zero
    if (left.length != right.length){ return 0; }

    // If they have the same length, find the longest prefix
    var sol = [];
    for(var i=0; i<left.length; i++){ sol.push("0"); }
    for (var i = 0; i<left.length; i++){
        if(left[i] == right[i]){
            sol[i] = left[i];
        } else {
            break;
        }
    }
    sol = parseInt(sol.join(''), 2);
    
    return sol;
};

console.log(rangeBitwiseAnd(5, 7));  // Expected: 4
console.log(rangeBitwiseAnd(0, 0));  // Expected: 0
console.log(rangeBitwiseAnd(1, 2147483647));  // Expected: 0