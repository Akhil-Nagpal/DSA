const nums = [2, 9, 7, 3, 1]; // An array of numbers representing the amount of money in each house.

function houseRobber(nums, i = 0, memo = {}) {
  // Check if the ith value is already calculated and present in memoization object.
  if (i in memo) {
    return memo[i];
  }

  // Base case: if the index is out of bounds of the array, return 0.
  if (i >= nums.length) {
    return 0;
  }

  // Recursive call: Calculate the maximum amount of money if we skip the current house.
  const skip = houseRobber(nums, i + 1, memo);

  // Recursive call: Calculate the maximum amount of money if we rob the current house.
  const take = nums[i] + houseRobber(nums, i + 2, memo);

  // Store the maximum of both choices in the memoization object.
  memo[i] = Math.max(skip, take);

  // Return the calculated maximum amount for the current index.
  return memo[i];
}

// Output the maximum amount of money that can be robbed without robbing two adjacent houses.
console.log(houseRobber(nums));
