/**
 * @param {number[]} nums
 * @return {number[]}
 */

//  BRUTE FORCE SOLUTION
//  You are given an integer array nums and you have to return a new counts array. 
//  The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i].
var countSmaller = function (nums) {
    var count = 0;

    for (var i = 0; i < nums.length - 1; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] > nums[j]) { count++; }
        }
        nums[i] = count;
        count = 0;
    }
    nums[nums.length-1] = 0;

    return nums;
};

console.log(countSmaller([5, 2, 6, 1]));
console.log(countSmaller([-1]));
console.log(countSmaller([-1, -1]));