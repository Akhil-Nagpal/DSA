// You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.

// You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.

// Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.
// Input: prices = [10,1,5,6,7,1]

// Output: 6

// function buySellStock(prices) {
//   // Brute Force
//   let profit = 0;

//   for (let i = 0; i < prices.length; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       let currentProfit = prices[j] - prices[i];
//       profit = Math.max(profit, currentProfit);
//     }
//   }
//   return profit;
// }

// optimised code using greedy and two pointers
function buySellStock(prices) {
  let profit = 0;
  let min = prices[0];

  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    let currentProfit = prices[i] - min;
    profit = Math.max(profit, currentProfit);
  }

  return profit;
}

console.log(buySellStock([7, 1, 5, 3, 6, 4])); // 5
console.log(buySellStock([7, 6, 4, 3, 1])); // 0
console.log(buySellStock([1])); // 0
