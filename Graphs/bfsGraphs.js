// *-*-*-*-* BREADTH FIRST SEARCH IN GRAPHS *-*-*-*-*

const graph = {
  a: ["b", "c"],
  b: ["a", "c", "d"],
  c: ["b", "d", "e"],
  d: ["c", "b", "e"],
  e: ["c", "d"],
};

// *-*-*-*-* Itrative Approach *-*-*-*-*
function breadthFirstGraph(graph, start) {
  const queue = [start];
  const visited = new Set();

  while (queue.length > 0) {
    const node = queue.shift();
    // check if there are neighbours or not
    for (const neighbour of graph[node]) {
      // check if the neighbour is visisted or not
      if (!visited.has(neighbour)) {
        visited.add(neighbour);
        queue.push(neighbour);
      }
    }
  }
  return visited;
}

// *-*-*-*-* Usage *-*-*-*-*
console.log(breadthFirstGraph(graph, "a"));
