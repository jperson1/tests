/**
 * @param {string} s
 * @return {boolean}
 */

//  Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//  An input string is valid if:
//  1. Open brackets must be closed by the same type of brackets.
//  2. Open brackets must be closed in the correct order.
var isValid = function (s) {
    var complement = function (char) {
        if (char == ')') { return '('; }
        if (char == ']') { return '['; }
        if (char == '}') { return '{'; }
        return '';
    }

    s = s.split('');
    var stack = [];
    var char = '';

    for (var i = 0; i < s.length; i++) {
        char = s[i];
        if (char == '(' || char == '[' || char == '{') {
            stack.push(char);
        } else if (char == ')' || char == ']' || char == '}') {
            if (stack.length == 0) { return false; }
            if (stack.pop() != complement(char)) { return false; }
        }
    }
    if (stack.length != 0) { return false; }
    return true;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));