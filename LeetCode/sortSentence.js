/**
 * @param {string} s
 * @return {string}
 */

//  A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.
//  For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
//  Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.
var sortSentence = function (s) {
    s = s.split(" ");
    sol = [];

    for (var i = 0; i < s.length; i++) {
        sol[s[i][s[i].length - 1] - 1] = s[i].slice(0, s[i].length - 1);
    }

    return sol.join(" ");
};

console.log(sortSentence("is2 sentence4 This1 a3"));
console.log(sortSentence("Myself2 Me1 I4 and3"));