/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

//  There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has.
//  And an integer extraCandies, denoting the number of extra candies that you have.
//  Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, 
//  they will have the greatest number of candies among all the kids, or false otherwise.
var kidsWithCandies = function (candies, extraCandies) {
    var max = candies[0];
    var ans = [];
    for (var i = 1; i < candies.length; i++) {
        if (candies[i] > max) { max = candies[i]; }
    }
    for (var i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= max) {
            ans.push(true);
        } else {
            ans.push(false);
        }
    }
    return ans;
};

console.log(kidsWithCandies([2,3,5,1,3], 3));
console.log(kidsWithCandies([4,2,1,1,2], 1));
console.log(kidsWithCandies([12,1,12], 10));