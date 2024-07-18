// [2, 7, 11, 15];
var twoSum = function (nums, target) {
  // Create a map to store the difference and index
  const numToIndex = new Map();

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const difference = target - num;

    // Check if the difference is already in the map
    if (numToIndex.has(difference)) {
      return [numToIndex.get(difference), i];
    }

    // Store the current number and its index in the map
    numToIndex.set(num, i);
  }

  // Return an empty array if no solution is found
  return [];
};
