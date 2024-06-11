// class Node {
//     constructor(key) {
//       this.key = key;
//       this.left = null;
//       this.right = null;
//     }
//   }

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

const recursiveDepthFirstTraversal = (root) =>{
    if(root === null){
        return // return empty 
    }
    const leftValues = recursiveDepthFirstTraversal(root.left);
    const rightValues = recursiveDepthFirstTraversal(root.right);

    return [root.key,leftValues,rightValues];
}

