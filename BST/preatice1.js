class BSTNode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  dlelete(key){
      this.root = this.deleteNode(this.node,key);
  }

  deleteNode(node,key){
    if(key<node.key){
      node.left= this.deleteNode(node.left,key);
    }else if(key>node.key){
      node.right  = this.deleteNode(node.right,key);
    }else{
      if(node.left===null&&node.right===null){
        return null;
      }else if(node.left===null){
        return node.right;
      }else if(node.right===null){
        return node.left;
      }else{
        let tempNode = this.findMaxNode(this.left);//*implimenting pre order predesussser.
          node.key = tempNode.key;
          node.right = this.deleteNode(node.right,tempNode.key);
      }
    }
    return node;
  }

  findMaxNode(node){
    while(node.right){
      node = node.right;
    }
    return node;
  }

  preOrederTraversal(){
    let result =  [];
    this.preOreder(this.root,result);
    return result;
  }

  preOreder(node,result){
    if(node){
      result.push(node);
      this.preOreder(node.right,result);
      this.preOreder(node.left,result);
    }
  }

}



BinarySearchTree.prototype.insert = function (key) {
  let newNode = new BSTNode(key);
  if (!this.root) {
    this.root = newNode;
  } else {
    this.insertNode(this.root, newNode);
  }
};
