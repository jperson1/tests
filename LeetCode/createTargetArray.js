/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */

//  Given two arrays of integers nums and index. Your task is to create target array under the following rules:
//  1. Initially target array is empty.
//  2. From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
//  3. Repeat the previous step until there are no elements to read in nums and index.
//  Return the target array.
var createTargetArray = function (nums, index) {
    var ans = [];
    
    for (var i = 0; i < index.length; i++) {
        ans.splice(index[i], 0, nums[i]);
    }
    
    return ans;
};

console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]));   // Expected: [0,4,1,3,2]
console.log(createTargetArray([1, 2, 3, 4, 0], [0, 1, 2, 3, 0]));   // Expected: [0,1,2,3,4]
console.log(createTargetArray([1], [0]));                           // Expected: [1]