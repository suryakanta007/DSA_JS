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
}

//* inserting in BST:-
BinarySearchTree.prototype.insert = function (key) {
  let newNode = new BSTNode(key);
  if (!this.root) {
    this.root = newNode;
  } else {
    this.insertNode(this.root, newNode);
  }
};

BinarySearchTree.prototype.insertNode = function (node, newNode) {
  //!node->root node
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
};

//* delete in BST:-
BinarySearchTree.prototype.delete = function (key) {
  this.root = this.deleteNode(this.root, key);
};
BinarySearchTree.prototype.deleteNode = function (node, key) {
  //!node -> root node
  if (!node) {
    return null;
  }
  if (key < node.key) {
    node.left = this.deleteNode(node.left, key);
  } else if (key > node.key) {
    node.right = this.deleteNode(node.right, key);
  } else {
    if (node.left === null && node.right === null) {
      return null;
    } else if (node.left === null) {
      return node.right;
    } else if (node.right === null) {
      return node.left;
    } else {//TODO handel the case in order produsessor. 
      let tempNode = this.findMinNode(node.right);
      node.key = tempNode.key;
      node.right = this.deleteNode(node.right, tempNode.key);
    }
  }
  return node;
};


BinarySearchTree.prototype.findMinNode = function (node) {
  while (node.left !== null) {
    node = node.left;
  }
  return node;
};

//* in-pre-post traversal.
BinarySearchTree.prototype.inOrderTraversal = function(){
  let result = [];
  this.inOrder(this.root,result);
  return result;
}
BinarySearchTree.prototype.inOrder = function(node,result){
  if(node !== null){
    this.inOrder(node.left,result);
    result.push(node.key);
    this.inOrder(node.right,result);
  }
}


BinarySearchTree.prototype.preOrderTraversal = function(){
  let result = [];
  this.preOrder(this.root,result);
  return result;
}
BinarySearchTree.prototype.preOrder = function(node,result){
  if(node !== null){
    result.push(node.key);
    this.preOrder(node.left,result);
    this.preOrder(node.right,result);
  }
}

BinarySearchTree.prototype.postOrderTraversal = function(){
  let result = [];
  this.postOrder(this.root,result);
  return result;
}

BinarySearchTree.prototype.postOrder = function(node,result){
  if(node){
    this.postOrder(node.left,result);
    this.postOrder(node.right,result);
    result.push(node.key);
  }
}
//TODO After complite recursion make the tree of the  in-pre-post traverse.




