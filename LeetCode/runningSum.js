/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// ex.  Input: [1, 2, 3, 4]
//      Output: [1, 3, 6, 10]
var runningSum = function (nums) {
    for (var i = 1; i < nums.length; i++) {
        nums[i] = nums[i] + nums[i-1];
    }
    return nums;
};

console.log(runningSum([1, 2, 3, 4]));