/**
 * @param {number} num
 * @return {number}
 */

//  Given an integer num, return the number of steps to reduce it to zero.
//  In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.
var numberOfSteps = function (num) {
    var step = 0;

    while (num != 0) {
        if (num % 2 == 0) {
            num /= 2;
        } else {
            num -= 1;
        }
        step++;
    }

    return step;
};

// Expected output: 6
console.log(numberOfSteps(14));
// Expected output: 4
console.log(numberOfSteps(8));