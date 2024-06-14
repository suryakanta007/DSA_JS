/*

const edges = [
  ['b', 'a'],
  ['c', 'a'],
  ['b', 'c'],
  ['q', 'r'],
  ['q', 's'],
  ['q', 'u'],
  ['q', 't'],
];

const graph = {
  b: [a],
  a: [b]
}

loop => check if DOES NOT exist, then add key => push both nodes

Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes.

After that you can find and node path etc.
Take care of cycle via visited technique.

*/


const createGraph =  (edges)=>{
    let graph = {};
    for (let edge of edges) {
        let [a,b] = edge;
        if(!(a in graph)){
            graph[a]=[];
        }
        if(!(b in graph)){
            graph[b] =[];
        }
       
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}


const edges = [
    ["b", "a"],
    ["c", "a"],
    ["b", "c"],
    ["q", "r"],
    ["q", "s"],
    ["q", "u"],
    ["q", "t"],
  ];
  console.log(createGraph(edges));
