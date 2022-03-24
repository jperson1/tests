/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

//  You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. 
//  Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
//  Letters are case sensitive, so "a" is considered a different type of stone from "A".
var numJewelsInStones = function (jewels, stones) {
    jewels = jewels.split('');
    stones = stones.split('');
    var sol = 0;

    for (var i = 0; i < stones.length; i++) {
        if (jewels.includes(stones[i])) { sol++; }
    }

    return sol;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));
console.log(numJewelsInStones("z", "ZZ"));