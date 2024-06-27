// class Node {
//     constructor(key) {
//       this.key = key;
//       this.left = null;
//       this.right = null;
//     }
//   }

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


const depthFirstTravesal = (root)=>{
    if(!root){
        return;
    }
    let values = [];
    let stack = [root];
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

let result = depthFirstTravesal(root);
console.log(result);

// const recursiveDepthFirstTraversal = (root) =>{
//     if(root === null){
//         return // return empty 
//     }
//     const leftValues = recursiveDepthFirstTraversal(root.left);
//     const rightValues = recursiveDepthFirstTraversal(root.right);

//     return [root.key,leftValues,rightValues];
// }

