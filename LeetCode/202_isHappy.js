/**
 * @param {number} n
 * @return {boolean}
 */

//  A happy number is a number defined by the following process:
//  1. Starting with any positive integer, replace the number by the sum of the squares of its digits.
//  2. Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
//  3. Those numbers for which this process ends in 1 are happy.
//  Return true if n is a happy number, and false if not.
var isHappy = function (n) {
    var squareDigits = function (x) {
        var digits = x.toString().split('');
        var count = 0;

        for(var i=0; i<digits.length; i++){
            digits[i] = parseInt(digits[i], 10);
            count += digits[i] *= digits[i];
        }
        return count;
    }

    var history = [];
    while (!history.includes(n)){
        history.push(n);
        n = squareDigits(n);
        if (n == 1){
            return true;
        }
    }
    return false;
};

console.log(isHappy(19));   // Expected: true
console.log(isHappy(2));    // Expected: false
