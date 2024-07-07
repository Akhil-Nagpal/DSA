// *-*-*-*-* FIND THE LARGEST ISLAND IN GRID USING DEPTH FIRST SEARCH *-*-*-*-*

const grid = [
  ["L", "L", "L", "L", "W"], // Grid representation where "L" denotes land and "W" denotes water
  ["W", "L", "W", "W", "L"],
  ["L", "L", "W", "L", "W"],
  ["W", "W", "L", "L", "L"],
  ["L", "W", "W", "L", "W"],
];

function minIsland(grid) {
  const rows = grid.length; // Number of rows in the grid
  const cols = grid[0].length; // Number of columns in the grid

  const visited = new Set(); // Set to keep track of visited positions
  let largestSize = 0; // Variable to track the size of the largest island

  // Iterate through each cell in the grid
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // If the cell is land and hasn't been visited, explore the island
      if (grid[i][j] === "L" && !visited.has(i + "," + j)) {
        const size = exploreSize(i, j); // Calculate the size of the island

        // Update largestSize if the current island is larger
        if (size > largestSize) {
          largestSize = size;
        }
      }
    }
  }

  // Function to explore the island using DFS and calculate its size
  function exploreSize(i, j) {
    const position = i + "," + j; // Current position in the grid

    // Base cases: check for out-of-bounds or if the cell is water or already visited
    if (
      i < 0 ||
      i >= rows ||
      j < 0 ||
      j >= cols ||
      grid[i][j] === "W" ||
      visited.has(position)
    ) {
      return 0; // Return 0 if it's not a valid land cell
    }

    visited.add(position); // Mark the cell as visited
    let size = 1; // Initialize island size as 1 for the current cell

    // Recursively explore neighboring cells (up, down, left, right)
    size += exploreSize(i + 1, j);
    size += exploreSize(i - 1, j);
    size += exploreSize(i, j + 1);
    size += exploreSize(i, j - 1);

    return size; // Return the total size of the island
  }

  return largestSize; // Return the size of the largest island found
}

console.log(minIsland(grid)); // Output the size of the largest island
