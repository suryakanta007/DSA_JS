const graph = {
  a: ["b", "c"],
  b: ["a", "c", "d"],
  c: ["a", "b", "d"],
  d: ["b", "c"],
  e: ["f"],
  f: ["e"],
};

const DFTItarative = (graph, start) => {
  let stack = [start];
  let visited = new Set();
  while (stack.length > 0) {
    let node = stack.pop();
    if (!visited.has(node)) {
      visited.add(node);
    }
    for (const neighbour of graph[node]) {
      if (!visited.has(neighbour)) {
        stack.push(neighbour);
      }
    }
  }
  return visited;
};
// console.log(DFTItarative(graph, "a"));

const DepthFTR = (graph, start, visited = new Set()) => {
  if (!visited.has(start)) {
    visited.add(start);
    for (let neighbour of graph[start]) {
      DepthFTR(graph, neighbour, visited);
    }
  }
  return visited;
};

console.log(DepthFTR(graph, "a"));
