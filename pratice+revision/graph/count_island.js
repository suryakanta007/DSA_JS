const graph = {
    a: ["b", "c"],
    b: ["a", "c", "d"],
    c: ["a", "b", "d"],
    d: ["b", "c"],
    e: ["f"],
    f: ["e"],
  };

//* using Dfs Approch:-

  let count_isLand = function(graph){
    let visited = new Set();
    let count = 0;
    
    // function dfs (start){
    //    let stack = [start];
    //    while(stack.length>0){
    //     let land = stack.pop();
    //     if(!visited.has(land)){
    //         visited.add(land);
    //         for(let neighbour of graph[land]){
    //             if(!visited.has(neighbour)){
    //                 stack.push(neighbour);
    //             }
    //         }
    //     }
    //    }
    // }

    function dfs(start){
        if(!visited.has(start)){
            visited.add(start);
            for (let neighbour of graph[start]) {
                dfs(neighbour);
            }
        }
    }



    for (const node in graph) {
        if(!visited.has(node)){
            dfs(node);
            count++;
        }
    }
    return count;
  }
  console.log(count_isLand(graph));