// *-*-*-*-* FIND THE MAXIMUM COSTING WAY FOR THE ROBOT TO REACH IT'S DESTINATION USING DYNAMIC PROGRAMMING *-*-*-*-*
// Robot can traverse only to right and bottom
// Robot initial position is top left corner
// Robot need to reach at bottom right corner

// Grid
const grid = [
  [2, 6, 3, 9, "W"],
  [8, "W", 7, 4, 7],
  [1, 4, 5, "W", 8],
  [4, 1, "W", 2, 5],
  ["W", 3, "W", 6, 3],
];

function maximumCostPath(grid, row = 0, col = 0, memo = {}) {
  // Get the initial position of the robot
  const pos = row + "," + col;

  // Check if the path is already in the cache
  if (pos in memo) {
    return memo[pos];
  }

  // Check for out of bound
  if (
    row >= grid.length ||
    col >= grid[0].length ||
    grid[row][col] === "W"
  ) {
    return -Infinity;
  }

  // Check if the robot arrived to the destination
  if (row === grid.length - 1 && col === grid[0].length - 1) {
    return grid[row][col];
  }

  // Get the maximum costing path
  memo[pos] =
    grid[row][col] +
    Math.max(
      maximumCostPath(grid, row + 1, col, memo),
      maximumCostPath(grid, row, col + 1, memo)
    );

  return memo[pos];
}

console.log(maximumCostPath(grid)); // Output: 47
