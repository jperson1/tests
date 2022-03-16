/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
var getConcatenation = function (nums) {
    return nums.concat(nums);
};

console.log(getConcatenation([1, 2, 1]))