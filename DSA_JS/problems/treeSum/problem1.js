const treeSum =(root)=> {
    if(!root){
        return;
    }
    let queue = [root];
    let sum = 0;
    while(queue.length >0){
        let node = queue.shift();
        sum += node.key;
        if(node.left){
            queue.push(node.left);
        }
        if(node.right){
            queue.push(node.right);
        }
    }
    return sum;
}