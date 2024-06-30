const graph = {
    a: ["b", "c"],
    b: ["a", "c", "d"],
    c: ["a", "b", "d"],
    d: ["b", "c"],
    e: ["f"],
    f: ["e"],
  };

  function dft(graph,start){
    let stack = [start];
    let visited = new Set();

    while(stack.length>0){
        let node  = stack.pop();
        if(!visited.has(node)){
            visited.add(node);
        }
        for (const neighbour of graph[node]) {
            if(!visited.has(neighbour)){
                stack.push(neighbour);
            }
        }
    }
    return visited;
  }
//   console.log(dft(graph,"a"));


// * recursive approch:-
  function dftRecursive(graph,start,visited= new Set()){
    if(!visited.has(start)){
        visited.add(start);
        for (let neighbour of graph[start]) {
            dftRecursive(graph,neighbour,visited);
        }
    }
    return visited;
  }
  console.log(dftRecursive(graph,"a"));

  //* Breath first search:-
  function breathFirst(graph,start){
    let queue = [start];
    let visited = new Set(start);
    while(queue.length>0){
      let node = queue.shift();
      for (const neighbour of graph[node]) {
        if(!visited.has(neighbour)){
          visited.add(neighbour);
          queue.push(neighbour);
        }
      }
    }
    return visited;
  }
  console.log(breathFirst(graph,"a"));