/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */

// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
// Return the array in the form [x1,y1,x2,y2,...,xn,yn].
var shuffle = function (nums, n) {
    var ans = [];
    for(var i=0; i<n; i++){
        ans.push(nums[i]);
        ans.push(nums[n+i]);
    }
    return ans;
};

console.log(shuffle([2, 5, 1, 3, 4, 7], 3));
console.log(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4));
console.log(shuffle([1, 1, 2, 2], 2));