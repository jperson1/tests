/**
 * @param {number} x
 * @return {number}
 */

//  iven a signed 32-bit integer x, return x with its digits reversed. 
//  If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.
var reverse = function (x) {
    x = x.toString().split('');

    x.reverse();

    if (x[x.length - 1] == '-') {
        x.pop();
        x.splice(0, 0, '-');
    }

    while (x[0] == '0' && x.length > 1) {
        x.splice(0, 1);
    }

    x = parseInt(x.join(''));

    if (x > 2147483647 || x < -2147483648) {
        return 0;
    }

    return x;
};

console.log(reverse(123));  // Expected: 321
console.log(reverse(-123)); // Expected: -321
console.log(reverse(120));  // Expected: 21