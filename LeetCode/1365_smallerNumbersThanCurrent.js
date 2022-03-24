/**
 * @param {number[]} nums
 * @return {number[]}
 */

//  Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. 
//  That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
var smallerNumbersThanCurrent = function (nums) {
    var sol = [];
    var count = 0;

    for (var i = 0; i < nums.length; i++) {
        for (var j = 0; j < nums.length; j++) {
            if ((nums[i] > nums[j]) && (i != j)) {
                count++;
            }
        }
        sol.push(count);
        count = 0;
    }

    return sol;
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
console.log(smallerNumbersThanCurrent([6, 5, 4, 8]));
console.log(smallerNumbersThanCurrent([7, 7, 7, 7]));