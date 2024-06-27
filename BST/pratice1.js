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

  delelete(key){
      this.root = this.deleteNode(this.root,key);
  }

  deleteNode(node,key){
    if(!node){
      return null;
    }
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
        let tempNode = this.findMaxNode(node.left);//*implimenting pre order predesussser.
          node.key = tempNode.key;
          node.left = this.deleteNode(node.left,tempNode.key);
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

let newTree = new BinarySearchTree();

newTree.insert(23);
newTree.insert(34);
newTree.insert(12);
newTree.insert(89);
newTree.insert(43);
newTree.insert(8);
newTree.insert(53);
newTree.insert(7);
newTree.insert(3);
newTree.insert(63);

newTree.delelete(23);
console.log(newTree.root);
console.log(newTree.preOrederTraversal());