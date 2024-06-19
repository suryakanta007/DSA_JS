// class Node {
//     constructor(key) {
//       this.key = key;
//       this.left = null;
//       this.right = null;
//     }
//   }//*just for reference 

function dfs(root){
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

