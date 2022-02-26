/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// Exactly one solution, and cannot use the same element twice.
 var twoSum = function(nums, target) {
    var index1 = 0
    var index2 = 1
    while (index1 < nums.length){
        while (index2 < nums.length){
            if(nums[index1] + nums[index2] == target){
                return ( [index1, index2] );
            }
            index2 += 1;
        }
        index1 += 1;
        index2 = index1 + 1;
    }
    return null;
};



console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));