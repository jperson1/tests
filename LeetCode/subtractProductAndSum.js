/**
 * @param {number} n
 * @return {number}
 */

//  Given an integer number n, return the difference between the product of its digits and the sum of its digits.
var subtractProductAndSum = function (n) {
    n = n.toString().split('').map(Number);
    return (n.reduce((partialProd, x) => partialProd * x, 1) - 
            n.reduce((partialSum, x) => partialSum + x, 0));
};


console.log(subtractProductAndSum(234));
console.log(subtractProductAndSum(4421));
