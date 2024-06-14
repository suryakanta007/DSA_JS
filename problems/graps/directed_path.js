/*
Given two nodes (start and dest) in a directed acyclic graph (DAG), return true if there is a directed path from start to dest, otherwise return false.

Example 1:

Input: start = 1, dest = 3
Output: true
Explanation: There is a directed path 1 -> 2 -> 3.
Example 2:

Input: start = 1, dest = 4
Output: false
Explanation: There is no path from 1 to 4.

*/

const graph = {
  a: ["b", "c"],
  b: [ "c", "d","a"],
  c: ["a", "b", "d"],
  d: ["b", "c","f"],
  e: ["f"],
  f: ["e"],
};
//* answer:- using DFS

const findPath = (graph, start, end) => {
  let stack = [start];
  let visited = new Set();
  while (stack.length > 0) {
    let node = stack.pop();
    if (node === end) {
      return true;
    }
    if (!visited.has(node)) {
      visited.add(node);
      for (let neighbour of graph[node]) {
        if (!visited.has(neighbour)) {
          stack.push(neighbour);
        }
      }
    }
  }
  return false;
};
console.log("DFS Give:" + findPath(graph, "a", "e"));

//* using BFS:-
const isPathFind = function (graph, start, dest) {
  let queue = [start];
  let visited = new Set();
  while (queue.length > 0) {
    let node = queue.shift();
    if (node === dest) {
      return true;
    }
    if (!visited.has(node)) {
      visited.add(node);
      for (let neighbour of graph[node]) {
        if (!visited.has(neighbour)) {
          queue.push(neighbour);
        }
      }
    }
  }
  return false;
};
console.log("BFS Give:" + isPathFind(graph, "a", "e"));

//* using recursive:-

function hasPathRcur (graph,start,dest,visited=new Set()){
  if(start===dest){
    return true;
  }
  if(visited.has(start)){
    return false;
  }
  visited.add(start);
  for(let neighbour of graph[start]){
    if(hasPathRcur(graph,neighbour,dest)){
      return true;
    };
  }
  return false;
}
