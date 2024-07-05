// *-*-*-*-* Find Shortest Path *-*-*-*-*

// *-*-* Edges *-*-*
const edges = [
  ["a", "b"],
  ["b", "c"],
  ["c", "d"],
  ["d", "e"],
  ["e", "a"],
  ["a", "c"],
  ["b", "e"],
  ["c", "e"],
  ["b", "d"],
  ["a", "e"],
  ["d", "c"],
  ["c", "b"],
  ["e", "f"],
  ["f", "g"],
  ["g", "h"],
  ["h", "i"],
];

// *-*-*-*-* Create graph from edges *-*-*-*-*
function createGraph(edges) {
  // store graph
  const graph = {};

  // Now traverse through all edges
  for (const edge of edges) {
    const [a, b] = edge;

    // check if the key does not exists then add key
    if (!(a in graph)) {
      graph[a] = [];
    }

    if (!(b in graph)) {
      graph[b] = [];
    }

    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
}

// *-*-* Graph Output *-*-*
console.log(createGraph(edges));

// *-*-*-*-* Using that graph now find the shortest path *-*-*-*-*
function shortestPath(edges, start, dest) {
  // create graph
  const graph = createGraph(edges);
  // add queue and check for cycle
  const queue = [[start, 0]];
  const visited = new Set([start]);

  //   check if the queue is present or not then traverse through all nodes
  while (queue.length > 0) {
    const [node, distance] = queue.shift();

    // if the node is the destination
    if (node === dest) {
      return [node, distance];
    }

    // now process the neighbours
    for (const neighbour of graph[node]) {
      // check if the neighbour is visited or not
      if (!visited.has(neighbour)) {
        visited.add(neighbour);
      }

      queue.push([neighbour, distance + 1]);
    }
  }
}

// *-*-* Path Output *-*-*
console.log(shortestPath(edges, "a", "i"));
