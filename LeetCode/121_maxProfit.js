/**
 * @param {number[]} prices
 * @return {number}
 */

//  You are given an array prices where prices[i] is the price of a given stock on the ith day.
//  You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
//  Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
var maxProfit = function (prices) {
    var left = 0;
    var right = 1;
    var sol = 0;

    for (right; right < prices.length; right++) {
        if (prices[left] < prices[right]) {     // Left is min, so update solution if necessary
            sol = Math.max(prices[right] - prices[left], sol);
        } else {                                // Right is min, so update left to be the min
            left = right;
        }
    }

    return sol;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Expected: 5 (day 2 = 1 day 5 = 6, 6-1 = 5)
console.log(maxProfit([7, 6, 4, 3, 1]));    // Expected: 0