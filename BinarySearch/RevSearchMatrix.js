// You are given an m x n 2-D integer array matrix and an integer target.
// Each row in matrix is sorted in non-decreasing order.
// The first integer of every row is greater than the last integer of the previous row.
// Return true if target exists within matrix or false otherwise.
// Can you write a solution that runs in O(log(m * n)) time?
// Input: matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]], target = 10
// Output: true

// Brute Force using linear search in matrix
// function searchMatrix(matrix, target) {
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[0].length; j++) {
//       if (target === matrix[i][j]) return true;
//     }
//   }
//   return false;
// }

// Optimised Code using Binary Search
function searchMatrix(matrix, target) {
  // first get the length of thge matrix (row and column length)
  let rows = matrix.length;
  let cols = matrix[0].length;

  // now define the pointers for binary search
  let left = 0;
  let right = rows * cols - 1; // how this calculates - get the row lwngth and col length multiply each that will give the full length then - 1 that will give the index
  // now do the same binary search alagorithm
  while (left <= right) {
    // get the middle index of the matrix
    let mid = Math.floor((left + right) / 2);
    // get the value of the middle index
    let row = Math.floor(mid / cols);
    let col = mid % cols;

    // check if the target matches the middle value
    if (target === matrix[row][col]) return true;
    if (target < matrix[row][col]) right = mid - 1;
    if (target > matrix[row][col]) left = mid + 1;
  }
  return false;
}

console.log(
  searchMatrix(
    [
      [1, 2, 4, 8],
      [10, 11, 12, 13],
      [14, 20, 30, 40],
    ],
    10,
  ),
);
