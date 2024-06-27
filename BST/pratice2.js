// class Node {
//     constructor(key) {
//       this.key = key;
//       this.left = null;
//       this.right = null;
//     }
//   }//*just for reference 

class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(6);

function dfs(root){
    if(!root){
        return ;
    }
    let stack = [root];
    let values = [];
    while(stack.length>0){
        let node = stack.pop();
        values.push(node.key);
        if(node.right){
            stack.push(node.right);
        }
        if(node.left){
            stack.push(node.left);
        }
    }
    return values;
}
// let result = dfs(root);
// console.log(result);

//*reurisive approch
function recursiveDFT(root){
    if(!root){
        return;
    }
    let leftValues = recursiveDFT(root.left);
    let rightValues = recursiveDFT(root.right);

    return [root.key,leftValues,rightValues];
}
// let result = recursiveDFT(root);
// console.log(result);

//*Breath First Traverse:-

function bft(root){
    if(!root){
        return;
    }
    let values = [];
    let queue = [root];
    while(queue.length>0){
        let node = queue.shift();
        values.push(node.key);
        if(node.left){
            queue.push(node.left);
        }
        if(node.right){
            queue.push(node.right);
        }
    }
return values;
}

let result = bft(root);
console.log(result);