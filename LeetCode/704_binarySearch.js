/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//  Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. 
//  If target exists, then return its index. Otherwise, return -1.
var search = function (nums, target) {
    var helper = function (left, right) {
        var middle = Math.floor((left + right) / 2);

        if (left > right) {
            return -1;
        }

        if (nums[middle] === target) { return middle; }

        if (target < nums[middle]) {
            return helper(left, middle - 1);
        } else {
            return helper(middle + 1, right);
        }
    }

    return helper(0, nums.length - 1);
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));   // Expected: 4
console.log(search([-1, 0, 3, 5, 9, 12], 2));   // Expected: -1