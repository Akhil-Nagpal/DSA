// *-*-*-*-* FIND BIGGEST ISLAND IN GRAPH *-*-*-*-*

const graph = {
  a: ["b", "c"],
  b: ["a", "d"],
  c: ["a", "e"],
  d: ["b"],
  e: ["c"],
  f: ["g"],
  g: ["f", "h", "i"],
  h: ["g"],
  i: ["g"],
  j: ["k"],
  k: ["j", "l"],
  l: ["k"],
  m: [],
  n: ["o"],
  o: ["n"],
  p: ["q"],
  q: ["p", "r"],
  r: ["q"],
};

// creating function
function biggestIsland(graph) {
  const visited = new Set();
  let largest = 0;

  // Traverse through all nodes
  for (const node in graph) {
    // check if the nodes are visited or not
    if (!visited.has(node)) {
      const componentSize = dfs(node);
      // check if the component size is bigger then the largest, the update the largest variable
      if (componentSize > largest) {
        largest = componentSize;
      }
    }
  }

  // check the size of the node
  function dfs(node) {
    // check if the node is visited the return 0
    if (visited.has(node)) {
      return 0;
    }
    // check if the node is not visited
    visited.add(node);
    let size = 1;
    // Now find all neighbours of node
    for (const neighbour of graph[node]) {
      size = size + dfs(neighbour);
    }
    return size;
  }

  return largest;
}

console.log(biggestIsland(graph));
