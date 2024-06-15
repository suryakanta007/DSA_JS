function createGraph(edges) {
  let graph = {};
  for (const edge of edges) {
    const [a, b] = edge;
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

const findSortPath = function (edges, start, dest) {
  let graph = createGraph(edges);
  let queqe = [[start, 0]];
  let visited = new Set();
  while (queqe.length > 0) {
    let [node, distance] = queqe.shift();
    if (node === dest) {
      return distance;
    }
    if (!visited.has(node)) {
      visited.add(node);
    }
    for (let neighbour of graph[node]) {
      if (!visited.has(neighbour)) {
        visited.add(neighbour);
        queqe.push([neighbour, distance + 1]);
      }
    }
  }
  return false;
};

const edges = [
  ["b", "a"],
  ["c", "a"],
  ["b", "c"],
  ["q", "r"],
  ["q", "s"],
  ["q", "u"],
  ["q", "t"],
];

console.log(findSortPath(edges, "b", "c"));
