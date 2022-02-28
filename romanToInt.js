/**
 * @param {string} s
 * @return {number}
 */

// Given string s in roman numeral format, return the int version
var romanToInt = function (s) {
    s = s.split('');
    var c = 0;
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case 'M':
                c += 1000;
                break;
            case 'D':
                c += 500;
                break;
            case 'L':
                c += 50;
                break;
            case 'V':
                c += 5;
                break;

            case 'C':
                if (i == s.length - 1) {
                    c += 100;
                    break;
                }
                if (s[i + 1] == 'D' || s[i + 1] == 'M') {
                    c -= 100;
                    break;
                }
                c += 100;
                break;
            case 'X':
                if (i == s.length - 1) {
                    c += 10;
                    break;
                }
                if (s[i + 1] == 'L' || s[i + 1] == 'C') {
                    c -= 10;
                    break;
                }
                c += 10;
                break;
            case 'I':
                if (i == s.length - 1) {
                    c += 1;
                    break;
                }
                if (s[i + 1] == 'V' || s[i + 1] == 'X') {
                    c -= 1;
                    break;
                }
                c += 1;
                break;
        }
    }
    return c;
};

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
