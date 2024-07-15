// *-*-*-*-* FIND THE MINIMUM COSTING WAY FOR THE ROBOT TO REACH IT'S DESTINATION USING DYNAMIC PROGRAMMING *-*-*-*-*
// Robot can traverse only to right and bottom
// Robot initial position is top left corner
// Robot need to reach at bottom right corner

// Grid
const grid = [
  [1, 3, "W", 4, 5],
  [2, "W", 6, "W", 8],
  [3, 7, 4, 2, "W"],
  ["W", 5, 9, "W", 3],
  [4, 6, 7, 8, 1],
];

function minimumCostPath(grid, row = 0, col = 0, memo = {}) {
  // Get the initial position of the robot
  const pos = row + "," + col;

  // Check if the path is already in the cache
  if (pos in memo) {
    return memo[pos];
  }

  // Check for out of bounds or if the cell is a wall
  if (
    row >= grid.length ||
    col >= grid[0].length ||
    grid[row][col] === "W"
  ) {
    return Infinity;
  }

  // Check if the robot arrived at the destination
  if (row === grid.length - 1 && col === grid[0].length - 1) {
    return grid[row][col];
  }

  // Get the maximum costing path
  memo[pos] =
    grid[row][col] +
    Math.min(
      minimumCostPath(grid, row + 1, col, memo),
      minimumCostPath(grid, row, col + 1, memo)
    );

  return memo[pos];
}

console.log(minimumCostPath(grid)); // Output: 40
