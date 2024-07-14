// *-*-*-*-* FIND ALL THE WAYS HOW CAN A ROBOT REACH IT'S DESTINATION USING DYNAMIC PROGRAMMING *-*-*-*-*
// Robot initial position is top left corner
// Robot can only move towrds right and bottom
// Robot need to reach at bottom right corner

function robotDest(grid, row = 0, col = 0, memo = {}) {
  // get the position of robot
  const pos = row + "," + col;

  // Check for out for bound
  if (
    row >= grid.length ||
    col >= grid[0].length ||
    grid[row][col] === "w"
  ) {
    return 0;
  }

  // Check if the robot arrived at given location
  if (row === grid.length - 1 && col === grid[0].length - 1) {
    return 1;
  }

  // Return the cached result
  if (pos in memo) {
    return memo[pos];
  }

  // Count the paths
  memo[pos] =
    robotDest(grid, row + 1, col, memo) +
    robotDest(grid, row, col + 1, memo);

  return memo[pos];
}
