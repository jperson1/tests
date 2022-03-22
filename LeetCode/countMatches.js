/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */

//  You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. 
//  You are also given a rule represented by two strings, ruleKey and ruleValue.
//  The ith item is said to match the rule if one of the following is true:
//  1. ruleKey == "type" and ruleValue == typei.
//  2. ruleKey == "color" and ruleValue == colori.
//  3. ruleKey == "name" and ruleValue == namei.
//  Return the number of items that match the given rule.
var countMatches = function (items, ruleKey, ruleValue) {
    var count = 0;
    var keyIndex;

    if(ruleKey == "type"){
        keyIndex = 0;
    } else if (ruleKey == "color"){
        keyIndex = 1;
    } else if (ruleKey == "name"){
        keyIndex = 2;
    } else {
        return -1;
    }

    for(var i=0; i<items.length; i++){
        if (items[i][keyIndex] == ruleValue){ count++; }
    }

    return count;
};

console.log(countMatches([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], "color", "silver")); // Expected: 1
console.log(countMatches([["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], "type", "phone")); // Expected: 2