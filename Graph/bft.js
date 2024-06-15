
const graph = {
    a: ["b", "c"],
    b: [ "c", "d"],//? from here cut a
    c: [ "b", "d"],//? from here cut a  //out b,c,a,d,f,e
    d: ["b", "c","f"],
    e: ["f"],
    f: ["e"],
  };

  const breadthFT =function (graph,start,visited = new Set()){
    let queue = [start];
    while(queue.length>0){
        const node = queue.shift();
        if(!visited.has(node)){
            visited.add(node)
        }
        for(let neighbour of graph[node]){
            if(!visited.has(neighbour)){
                visited.add(neighbour);
                queue.push(neighbour);
            }
        }
    }
    return visited;
  }
  console.log(breadthFT(graph,"a"));