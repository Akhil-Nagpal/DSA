// *-*-*-*-* FIND HOW MANY CONNECTED ISLANDS ARE THERE *-*-*-*-*

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

// *-*-*-*-* Find the Islands *-*-*-*-*
function connectedIsland(graph) {
  const visited = new Set();
  let count = 0;

  // traverse through all nodes
  for (const node in graph) {
    // check if the node is visited or not
    if (!visited.has(node)) {
      dfs(node);
      count++;
    }
  }

  function dfs(node) {
    // check if the node is visited or not
    if (!visited.has(node)) {
      visited.add(node);
      // Now traverse through all neighbours
      for (const neighbour of graph[node]) {
        dfs(neighbour);
      }
    }
  }

  return count;
}

console.log(connectedIsland(graph));
