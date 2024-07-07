// *-*-*-*-* FIND HOW MANY ISLANDS ARE THERE IN A GRID USING DEPTH FIRST SEARCH *-*-*-*-*

const grid = [
  ["L", "L", "L", "L", "W"],
  ["W", "L", "W", "W", "L"],
  ["L", "L", "W", "L", "W"],
  ["W", "W", "L", "L", "L"],
  ["L", "W", "W", "L", "W"],
];

function gridIsland(grid) {
  // get the length of whole grid
  const rows = grid.length;
  const cols = grid[0].length;

  // take a variable check if the positon is visited
  const visited = new Set();
  // take the variable for count
  let count = 0;

  // Now traverse through whole grid
  // traverse through rows
  for (let i = 0; i < rows; i++) {
    // traverse through columns
    for (let j = 0; j < cols; j++) {
      // check if the specific position is equals to "L" and if the that "L" is visited or not
      if (grid[i][j] === "L" && !visited.has(i + "," + j)) {
        count++;
        dfs(i, j);
      }
    }
  }

  // Now traverse through all the positions using Depth First Search
  function dfs(i, j) {
    // get the co-ordinates of the single element
    const position = i + "," + j;

    // check if the there are boundaries or if the elements is "W" or if the element is visited
    if (
      i < 0 ||
      i >= rows ||
      j < 0 ||
      j >= cols ||
      grid[i][j] === "W" ||
      visited.has(position)
    ) {
      return;
    }

    // else add the element to visited
    visited.add(position);

    // Traverse to all 4 sides of single element using depth first search
    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  }

  return count;
}

console.log(gridIsland(grid));
