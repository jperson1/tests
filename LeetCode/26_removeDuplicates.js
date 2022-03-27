/**
 * @param {number[]} nums
 * @return {number}
 */

//  Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. 
//  The relative order of the elements should be kept the same.
var removeDuplicates = function (nums) {
    var left = 0;
    var right = 1;

    if (nums.length < 2) { return nums.length; }

    for (left; left < nums.length - 1; left++, right++) {
        while (nums[left] == nums[right]) {
            nums.splice(left, 1);
        }
    }

    return nums.length;
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));