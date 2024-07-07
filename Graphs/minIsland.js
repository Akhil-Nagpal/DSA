// *-*-*-*-* FIND THE MINIMUM ISLAND IN GRID USING DEPTH FIRST SEARCH *-*-*-*-*

const grid = [
  ["L", "L", "L", "L", "W"],
  ["W", "L", "W", "W", "L"],
  ["L", "L", "W", "L", "W"],
  ["W", "W", "L", "L", "L"],
  ["L", "W", "W", "L", "W"],
];

function minIsland(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  const visited = new Set();
  let smallestSize = Infinity;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "L" && !visited.has(i + "," + j)) {
        const size = exploreSize(i, j);

        if (size < smallestSize) {
          smallestSize = size;
        }
      }
    }
  }

  function exploreSize(i, j) {
    const position = i + "," + j;

    if (
      i < 0 ||
      i >= rows ||
      j < 0 ||
      j >= cols ||
      grid[i][j] === "W" ||
      visited.has(position)
    ) {
      return 0;
    }

    visited.add(position);
    let size = 1;

    size += exploreSize(i + 1, j);
    size += exploreSize(i - 1, j);
    size += exploreSize(i, j + 1);
    size += exploreSize(i, j - 1);

    return size;
  }

  return smallestSize;
}

console.log(minIsland(grid));
