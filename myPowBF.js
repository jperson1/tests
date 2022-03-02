/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

// Implement pow(x, n), which calculates x raised to the power n (i.e., x^n).
// BRUTE FORCE: Loop while multiplying the base.
var myPow = function (x, n) {
    var p = x;

    if (n == 0) {
        return 1;
    }

    if (n < 0) {
        p = 1 / p;
        x = 1 / x;
        n = n * -1;
    }

    for (let i = 1; i < n; i++) {
        p *= x;
    }
    return p;
};

console.log(myPow(2.00000, 10));
console.log(myPow(2.10000, 3));
console.log(myPow(2.00000, -2));