/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

// Implement pow(x, n), which calculates x raised to the power n (i.e., x^n).
// MODULO: Multiply the base by itself to move up faster.
// Does not work with large numbers (+- 2^32).
var myPow = function (x, n) {
    var p = 1;

    if (n == 0 || x == 1){
        return 1;
    } else if (x == -1){
        if (n % 2 == 0){ return -1; }
        return 1;
    } else if (n >= (2147483647) || n <= -2147483647){
        return 0;
    }
    
    if (n < 0) {
        x = 1 / x;
        n = n * -1;
    }

    while (n > 0) {
        if (n % 2 == 1){ p *= x; }
        x *= x;
        n = n>>1;
    }
    return p;
};

console.log(myPow(2.00000, 10));
console.log(myPow(2.10000, 3));
console.log(myPow(2.00000, -2));
console.log(myPow(2.00000, -2147483648));