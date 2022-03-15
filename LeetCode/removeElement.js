/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.
var removeElement = function (nums, val) {
    var len = nums.length;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == val) {
            nums.splice(i, 1);
            len--;
            i--;
        }
    }
    return len;
};

console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
