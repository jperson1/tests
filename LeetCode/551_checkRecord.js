/**
 * @param {string} s
 * @return {boolean}
 */

//  You are given a string s representing an attendance record for a student where each character signifies whether the student was absent, late, or present on that day. 
//  The record only contains the following three characters:
//  'A': Absent.
//  'L': Late.
//  'P': Present.

//  The student is eligible for an attendance award if they meet both of the following criteria:
//  The student was absent ('A') for strictly fewer than 2 days total.
//  The student was never late ('L') for 3 or more consecutive days.

//  Return true if the student is eligible for an attendance award, or false otherwise.
var checkRecord = function (s) {
    s = s.split('');
    var absent = 0;
    var late = 0;

    for (var i = 0; i < s.length; i++) {
        if (s[i] == 'A') {
            absent++;
            late = 0;
        } else if (s[i] == 'L') {
            late++;
        } else {
            late = 0;
        }

        if (absent > 1) { return false; }
        if (late > 2) { return false; }
    }

    return true;
};

console.log(checkRecord("PPALLP")); // Expected: true
console.log(checkRecord("PPALLL")); // Expected: false