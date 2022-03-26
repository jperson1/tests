/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//  Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
//  You must write an algorithm with O(log n) runtime complexity.
var searchInsert = function (nums, target) {
    var helper = function (left, right) {
        var middle = Math.floor((left + right) / 2);

        if (left > right) {
            if (nums[middle] > target){
                return middle;
            }
            return middle + 1;
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

console.log(searchInsert([1, 3, 5, 6], 5));         // Expected: 2
console.log(searchInsert([1, 3, 5, 6], 2));         // Expected: 1
console.log(searchInsert([1, 3, 5, 6], 7));         // Expected: 4
console.log(searchInsert([1, 3, 5, 7, 8, 9], 4));   // Expected: 2
