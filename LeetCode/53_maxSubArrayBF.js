/**
 * @param {number[]} nums
 * @return {number}
 */

//  BRUTE FORCE: NOT EFFICIENT
//  Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
var maxSubArray = function (nums) {
    var currMax = nums[0];
    var max = nums[0];

    for (var i = 0; i < nums.length; i++) {
        currMax = nums[i];
        if (currMax > max) { max = currMax; }
        for (var j = i + 1; j < nums.length; j++) {
            currMax += nums[j];
            if (currMax > max) { max = currMax; }
        }
    }

    return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));  // Expected: 6 - [4, -1, 2, 1]
console.log(maxSubArray([1]));                              // Expected: 1
console.log(maxSubArray([5, 4, -1, 7, 8]));                 // Expected: 23
console.log(maxSubArray([-2, 1]));                          // Expected: 1