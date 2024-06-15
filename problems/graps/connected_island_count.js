const graph = {
  a: ["b", "c"],
  b: ["a", "c", "d"],
  c: ["a", "b", "d"],
  d: ["b", "c"],
  e: ["f"],
  f: ["e"],
};

const countIsLand = function (graph) {
  let visited = new Set();
  let count = 0;

  //*DFS using itarative approch:-
    function dfs(start) {
      let stack = [start];
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
    }

  //* dfs using recursive approch:-
//   function dfs(start) {
//     if (!visited.has(start)) {
//       visited.add(start);
//       for (let neighbour of graph[start]) {
//         dfs(neighbour);
//       }
//     }
//   }

  for (const node in graph) {
    if (!visited.has(node)) {
      dfs(node);
      count++;
    }
    // console.log("graph:"+visited);
  }
  return count;
};

console.log(countIsLand(graph));
