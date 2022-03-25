/**
 * @param {number[]} nums
 * @return {number}
 */

//  Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
var singleNumber = function (nums) {
    nums.sort(function (a, b) {
        return a - b;
    });
    for (var i = 0; i < nums.length - 1; i += 2) {
        if (nums[i] != nums[i + 1]) {
            return nums[i];
        }
    }
    return nums[nums.length - 1];
};

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([1]));