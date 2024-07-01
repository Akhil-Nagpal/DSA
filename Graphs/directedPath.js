// *-*-*-*-* FIND DIRECTED PATH DESTINATION USING BREADTH & DEPTH FIRST SEARCH *-*-*-*-*

const graph = {
  a: ["b", "c"],
  b: ["c", "d"],
  c: ["d", "e"],
  d: ["e"],
  e: [], // 'e' has no outgoing edges in this directed graph
};

// *-*-*-*-* Find Path with Depth First Search *-*-*-*-*
// *-*-* Itrative Approach *-*-*
function hasPathDFS(graph, start, dest) {
  const stack = [start];
  const visited = new Set();

  while (stack.length > 0) {
    const node = stack.pop();
    // Check if the starting node is equalls to destiny or not
    if (node === dest) {
      return true;
    }

    // Check if the node is visited or not
    if (!visited.has(node)) {
      visited.add(node);
      // Now Traverse through all neighbours
      for (const neighbour of graph[node]) {
        stack.push(neighbour);
      }
    }
  }

  return false;
}

// *-*-* Usage *-*-*
console.log(hasPathDFS(graph, "e", "a"));

// *-*-*-*-* Find Path with Breadth First Search *-*-*-*-*
function hasPathBFS(graph, start, dest) {
  const queue = [start];
  const visited = new Set();

  while (queue.length > 0) {
    const node = queue.shift();
    // Check if the node is equals to destiny or not
    if (node === dest) {
      return true;
    }

    // Check if the node is visited or not
    if (!visited.has(node)) {
      visited.add(node);

      // Now traverse through all neigbours
      for (const neighbour of graph(node)) {
        queue.push(neighbour);
      }
    }
  }
  return false;
}

// *-*-* Usage *-*-*
console.log(hasPathBFS(graph, "a", "e"));

// *-*-* Recursive Approach *-*-*
function recursiveHasPath(graph, start, dest, visited = new Set()) {
  // Base Case -> if the starting node is equals to destiny then return true
  if (start === dest) {
    return true;
  }

  //   Check if the start node is visited or not
  if (!visited.has(start)) {
    return false;
  }
  visited.add(start);

  // Recursive Case
  for (const neighbour of graph[start]) {
    if (recursiveHasPath(graph, neighbour, dest) === true) {
      return true;
    }
  }
  return false;
}

// *-*-* Usage *-*-*
console.log(recursiveHasPath(graph, "a", "e"));
