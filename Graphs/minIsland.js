// *-*-*-*-* FIND THE MINIMUM ISLAND IN GRID USING DEPTH FIRST SEARCH *-*-*-*-*

const grid = [
  ["L", "L", "L", "L", "W"],
  ["W", "L", "W", "W", "L"],
  ["L", "L", "W", "L", "W"],
  ["W", "W", "L", "L", "L"],
  ["L", "W", "W", "L", "W"],
];

function minIsland(grid) {
  const rows = grid.length; // Get the number of rows in the grid
  const cols = grid[0].length; // Get the number of columns in the grid

  const visited = new Set(); // Set to track visited cells
  let smallestSize = Infinity; // Variable to track the smallest island size

  // Traverse through each cell in the grid
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // If the cell is land and hasn't been visited, explore the island
      if (grid[i][j] === "L" && !visited.has(i + "," + j)) {
        const size = exploreSize(i, j); // Calculate the island size

        // Update smallestSize if the current island is smaller
        if (size < smallestSize) {
          smallestSize = size;
        }
      }
    }
  }

  // Helper function to calculate the size of an island using DFS
  function exploreSize(i, j) {
    const position = i + "," + j;

    // Check boundaries, water cells, and already visited cells
    if (
      i < 0 ||
      i >= rows ||
      j < 0 ||
      j >= cols ||
      grid[i][j] === "W" ||
      visited.has(position)
    ) {
      return 0; // Return 0 for invalid cells
    }

    visited.add(position); // Mark the current cell as visited
    let size = 1; // Start with size 1 for the current land cell

    // Recursively calculate the size by exploring all adjacent cells
    size += exploreSize(i + 1, j); // Down
    size += exploreSize(i - 1, j); // Up
    size += exploreSize(i, j + 1); // Right
    size += exploreSize(i, j - 1); // Left

    return size; // Return the total size of the island
  }

  return smallestSize; // Return the smallest island size found
}

// Print the size of the smallest island in the grid
console.log(minIsland(grid));
