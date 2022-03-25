/**
 * @param {number[]} nums
 * @return {number}
 */

//  Given an integer array nums where every element appears three times except for one, which appears exactly once. 
//  Find the single element and return it.
var singleNumber = function (nums) {
    nums.sort(function (a, b) {
        return a - b;
    });
    for (var i = 0; i < nums.length - 2; i += 3) {
        if (nums[i] != nums[i + 1] || nums[i] != nums[i + 2]) {
            if (nums[i] == nums[i + 1]) { return nums[i + 2]; }
            if (nums[i] == nums[i + 2]){ return nums[i + 1]; }
            return nums[i];
        }
    }
    return nums[nums.length - 1];
};

console.log(singleNumber([2, 2, 3, 2]));
console.log(singleNumber([0, 1, 0, 1, 0, 1, 99]));
console.log(singleNumber([30000,500,100,30000,100,30000,100]));
