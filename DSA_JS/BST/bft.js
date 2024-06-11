// class Node {
//     constructor(key) {
//       this.key = key;
//       this.left = null;
//       this.right = null;
//     }
//   }

const breathFirstTraverse = (root)=>{
    if(!root){
        return;
    }
    let values = [];
    let queue = [root];
    while(queue.length>0){
       const node =  queue.shift();
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