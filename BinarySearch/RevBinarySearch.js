// You are given an array of distinct integers nums, sorted in ascending order, and an integer target.
// Implement a function to search for target within nums. If it exists, then return its index, otherwise, return -1.
// Your solution must run in O(logn) time.
// example - [-1,0,2,4,6,8] target - 4
// outpu - 3

// Brute Force - Linear Search
// function search(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     if (target === nums[i]) return i;
//   }
//   return -1;
// }

// Optimised Code using Binary Search
function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) return mid;
    if (target < nums[mid]) right = mid - 1;
    if (target > nums[mid]) left = mid + 1;
  }
  return -1;
}

console.log(search([-1, 0, 2, 4, 6, 8], 4));
