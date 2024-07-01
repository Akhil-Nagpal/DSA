// *-*-*-*-* FIND THE UNDIRECTED PATH DESTINATION USING BREADTH & DEPTH FIRST SEARCH *-*-*-*-*

// *-*-* Edges already given *-*-*

// const edges = [
//   ["b", "a"],
//   ["c", "a"],
//   ["b", "c"],
//   ["q", "r"],
//   ["q", "s"],
//   ["q", "u"],
//   ["q", "t"],
// ];

// *-*-*-*-* Need to create graph out of edges and then find destination *-*-*-*-*

function createGraph(edges) {
  // create graph
  const graph = {};

  // Move on every edge
  for (const edge of edges) {
    const [a, b] = edge;

    // check if the key does not exists, then add the key
    if (!(a in graph)) {
      graph[a] = [];
    }
    if (!(b in graph)) {
      graph[b] = [];
    }

    // push both nodes in key
    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
}

// *-*-*-*-* Graph created *-*-*-*-*
const graph = createGraph([
  ["a", "b"],
  ["c", "a"],
  ["b", "c"],
  ["d", "b"],
]);
console.log(graph);

// *-*-*-*-* Find a path from start to destination *-*-*-*-*
function hasPath(graph, start, dest) {
  const stack = [start];
  const visited = new Set();

  while (stack.length > 0) {
    // get node from stack
    const node = stack.pop();

    // check if the starting node is equals to destionation or not
    if (node === dest) {
      return true;
    }

    // check if the node is visisted or not
    if (!visited.has(node)) {
      visited.add(node);

      //  Now traverse through all neighbours
      for (const neighbour of graph[node]) {
        stack.push(neighbour);
      }
    }
  }
  return false;
}

console.log(hasPath(graph, "a", "d"));
