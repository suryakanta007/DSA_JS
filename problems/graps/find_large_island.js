const graph = {
  a: ["b", "c"],
  b: ["a", "c", "d"],
  c: ["a", "b", "d"],
  d: ["b", "c",],
  e: ["f"],
  f: ["e","h"],
  h:["r"],
  g:["k"],
  r:[],
  k:[]
};



const findLargest = function (graph) {
  let visited = new Set();
  let largest = 0;

//* dfs using itarative approch:-
  function dfs(start) {
    let stack = [start];
    let size = 0;
    while(stack.length>0){
        let node  = stack.pop();
        if(!visited.has(node)){
            visited.add(node);
            size = size+1;
        } 
        for(let neighbour of graph[node]){
            if(!visited.has(neighbour)){
                stack.push(neighbour);
            }
        }
    }
    return size;
}

//* dfs using recursive approch:-
// function dfs(start){
//     if(visited.has(start)){
//         return 0;
//     }
//     visited.add(start);
//     let size = 1;
//     for (const neighbour of graph[start]) {
//         size = size+dfs(neighbour);
//     }
//     return size;
// }

  for (let node in graph) {
    if (!visited.has(node)) {
      let comonentSize = dfs(node);
      if (comonentSize > largest) {
        largest = comonentSize;
      }
    }
  }
  return largest;
};

console.log(findLargest(graph));
