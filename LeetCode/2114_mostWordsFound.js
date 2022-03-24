/**
 * @param {string[]} sentences
 * @return {number}
 */

// You are given an array of strings sentences, where each sentences[i] represents a single sentence.
// Return the maximum number of words that appear in a single sentence.
var mostWordsFound = function (sentences) {
    var ans = 0;
    for(var i=0; i<sentences.length; i++){
        if(sentences[i].split(" ").length > ans) { ans =  sentences[i].split(" ").length; }
    }
    return ans;
};

console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]));
console.log(mostWordsFound(["please wait", "continue to fight", "continue to win"]));
