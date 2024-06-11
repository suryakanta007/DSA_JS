//* Always takecare to create linkList is how to create a node.

class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

//*  to create a doublyLinkedList :-
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}

//* Insert at begnning
DoublyLinkedList.prototype.insertAtBegnning = function (data) {
  let newNode = new Node(data, this.head);
  if (this.head !== null) {
    this.head.prev = newNode;
  } 
  this.head = newNode;
  if (!this.tail) {
    this.tail = newNode;
  }
};
DoublyLinkedList.prototype.insertAtEnd = function (data) {
  let newNode = new Node(data, null, this.tail);
  if (this.tail !== null) {
    this.tail.next = newNode;
  }
  this.tail = newNode;
  if (!this.head) {
    this.head = newNode;
  }
};

//* Insert at anyPoint.
DoublyLinkedList.prototype.insertAtAny = function (prevNode, data) {
  let newNode = new Node(data, prevNode.next, prevNode);
  if (prevNode.next !== null) {
    prevNode.next.prev = newNode;
  }
  if (prevNode.next === null) {
    this.tail = newNode;
  }
  prevNode.next = node;
};
//* Delete firstNode
DoublyLinkedList.prototype.deleteFirstNode = function(){
    if(!this.head){
        console.log("Noting to Delete");
        return;
    }
    if(this.head === this.tail){
        this.head = null;
        this.tail = null;
    }else{
        this.head = this.head.next;
        this.head.prev = null;
    }
}

//* Delete lastnode
DoublyLinkedList.prototype.deleteLastNode = function(){
    if(!this.tail){
        console.log("Nothing to delete");
        return;
    }
    if(this.head===this.tail){
        this.head =null;
        this.tail = null;
    }else{
        this.tail = this.tail.prev;
        this.tail.next = null;
    }
}

//* Reverese the list:-
DoublyLinkedList.prototype.reverse =function (){
    if(!this.head){
        console.log("Nothing to revese.");
        return;
    }
    let current = this.head;
    let temp = null;
    while(current){
        temp = current.prev;
        current.prev = current.next;
        current.next = temp;
        //?move to the next node
        current = current.prev;
    }
    if(temp){
        this.head = this.tail;
        this.tail = temp.prev;
    }
}