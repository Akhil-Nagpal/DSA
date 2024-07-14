// *-*-*-*-* FIND IF THE COIN CAN PASS THROUGH ANY ONE OF GIVEN NUMBERS USING MEMOIZATION APPROACH *-*-*-*-*

function coinSum(amount, numbers, memo = {}) {
  // Check if the amount is already present in the memo
  if (amount in memo) {
    return memo[amount]; // Return the memoized result if available
  }

  // Base Cases
  // Case 1 -> If the amount is 0, it means the amount can be formed using the given numbers
  if (amount === 0) {
    return true;
  }

  // Case 2 ->  If the amount is negative, it means it can't be formed using the given numbers
  if (amount < 0) {
    return false;
  }

  // Iterate over each number in the given numbers
  for (const num of numbers) {
    // Recursively check if the remaining amount can be formed using the numbers
    if (coinSum(amount - num, numbers, memo)) {
      memo[amount] = true; // Memoize the result as true
      return true; // Return true if any combination forms the amount
    }
  }

  memo[amount] = false; // Memoize the result as false if no combination forms the amount
  return false; // Return false if the amount cannot be formed
}

console.log(coinSum(54, [2, 8, 16])); // Test the function with an example
