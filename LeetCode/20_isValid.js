/**
 * @param {string} s
 * @return {boolean}
 */

//  Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//  An input string is valid if:
//  1. Open brackets must be closed by the same type of brackets.
//  2. Open brackets must be closed in the correct order.
var isValid = function (s) {
    s = s.split('');
    var stack = [];

    for (var i=0; i<s.length; i++){
        if (s[i] == "(") { stack.push('('); }
        else if (s[i] == "[") { stack.push('['); }
        else if (s[i] == "{") { stack.push('{'); }
        else if ((stack.pop() == '(') && (s[i] != ')')) { return false; }
        else if ((stack.pop() == '[') && (s[i] != ']')) { return false; }
        else if ((stack.pop() == '{') && (s[i] != '}')) { return false; }
    }
    
    if(stack.length == 0){ return true; }
    return false;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));