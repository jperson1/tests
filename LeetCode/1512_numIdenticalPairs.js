/**
 * @param {number[]} nums
 * @return {number}
 */

//  Given an array of integers nums, return the number of good pairs.
//  A pair (i, j) is called good if nums[i] == nums[j] and i < j.
var numIdenticalPairs = function (nums) {
    var ans = 0;
    for (var i=0; i<nums.length; i++){
        for(var j=i+1; j<nums.length; j++){
            if (nums[i] == nums[j]) { ans++; }
        }
    }
    return ans;
};

console.log(numIdenticalPairs([1,2,3,1,1,3]));
console.log(numIdenticalPairs([1,1,1,1]));
console.log(numIdenticalPairs([1,2,3]));