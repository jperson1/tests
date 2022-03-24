/**
 * @param {number[][]} accounts
 * @return {number}
 */

// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.
var maximumWealth = function (accounts) {
    var ans = 0;
    for (var i = 0; i < accounts.length; i++) {
        accounts[i] = accounts[i].reduce(
            (previous, current) => previous + current
        )
    }
    for (var i = 0; i < accounts.length; i++) {
        if(accounts[i] > ans){ ans = accounts[i]; }
    }
    return ans;
};

console.log(maximumWealth([[1,2,3],[3,2,1]]));
console.log(maximumWealth([[1,5],[7,3],[3,5]]));