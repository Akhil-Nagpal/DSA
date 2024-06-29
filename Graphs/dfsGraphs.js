// *-*-*-*-* DEPTH FIRST SEARCH IN GRAPHS *-*-*-*-*

const graph = {
  a: ["b", "c"],
  b: ["a", "c", "d"],
  c: ["b", "d", "e"],
  d: ["c", "b", "e"],
  e: ["c", "d"],
};

// *-*-*-*-* Iterative Approach *-*-*-*-*
function depthFitstGraph(graph, start) {
  const stack = [start];
  const visited = new Set();

  while (stack.length > 0) {
    const node = stack.pop();
    // check if the node is visited or not
    if (!visited.has(node)) {
      visited.add(node);
      // Now visit every neighbour of that node
      for (const neighbour of graph[node]) {
        // Check if the neighbour is visited or not
        if (!visited.has(neighbour)) {
          // visited.add(neighbour);
          stack.push(neighbour);
        }
      }
    }
  }
  return visited;
}

// *-*-*-*-* Usage *-*-*-*-*
console.log(depthFitstGraph(graph, "a"));

// *-*-*-*-* Recursive Approach *-*-*-*-*
function recursiveDFSGraph(graph, start, visited = new Set()) {
  // Check if the node is visited or not
  if (!visited.has(start)) {
    visited.add(start);
    //   Now visit every neighbour of that node
    for (const neighbour of graph[start]) {
      // Check if the neighbour is visited or not
      if (!visited.has(neighbour)) {
        return recursiveDFSGraph(graph, neighbour, visited);
      }
    }
  }
  return visited;
}

// *-*-*-*-* Usage *-*-*-*-*
console.log(recursiveDFSGraph(graph, "a"));
