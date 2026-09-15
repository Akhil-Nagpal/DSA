// You are given an m x n 2-D integer array matrix and an integer target.
// Each row in matrix is sorted in non-decreasing order.
// The first integer of every row is greater than the last integer of the previous row.
// Return true if target exists within matrix or false otherwise.
// Can you write a solution that runs in O(log(m * n)) time?
// Input: matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]], target = 10
// Output: true

// // Brute Force
// function searchMatrix(matrix, target) {
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[0].length; j++) {
//       if (target === matrix[i][j]) return true;
//     }
//   }
//   return false;
// }

// Optimised Code using binary search
function searchMatrix(matrix, target) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let left = 0;
  let right = rows * cols - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let row = Math.floor(mid / cols);
    let col = mid % cols;

    if (target === matrix[row][col]) return true;
    if (target < matrix[row][col]) right = mid - 1;
    if (target > matrix[row][col]) left = mid + 1;
  }
  return false;
}

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3,
  ),
); // true=
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    13,
  ),
); // false
