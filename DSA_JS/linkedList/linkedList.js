class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

//*insert at the start
LinkedList.prototype.insertAtBeginning = function (data) {
  const newNode = new Node(data);
  newNode.next = this.head; //*if a data is already present in that point.
  this.head = newNode;
};

//*insert at the end
LinkedList.prototype.insertAtEnd = function (data) {
  const newNode = new Node(data);
  if (!this.head) {
    this.head = newNode;
    return;
  }

  let last = this.head;
  while (last.next) {
    last = last.next;
  }
  last.next = newNode;
};

//* Insert at any point
LinkedList.prototype.insertAtAnyPoint = function (prevNode, data) {
  if (!prevNode) {
    console.log("prevous can not be null.");
    return;
  }

  const newNode = new Node(data, prevNode.next);
  prevNode.next = newNode;
};

//* Delete from the beging.
LinkedList.prototype.deleteFirstNode = () => {
  if (!this.head) {
    console.log("The linkList is null.");
    return;
  }
  this.head = this.head.next;
};

//* Delete from last
//! NOTE: in the case always think about the last Node.
LinkedList.prototype.deleteLastNode = function () {
  if (!this.head) {
    console.log("The linkedList is empty.");
    return;
  }
  if (!this.head.next) {
    this.head = null; //*if there is only one node
    return;
  }
  let secondLast = this.head;
  while (secondLast.next.next) {
    secondLast = secondLast.next;
  }
  secondLast.next = null;
};

//* Delete from any point:-
LinkedList.prototype.deleteWithKey = function (key) {
  if (!this.head) {
    console.log("The linkedList is empty.");
    return;
  }
  //* if the data is found at head
  if (this.head.data === key) {
    this.head = this.head.next;
    return;
  }

  let currentNode = this.head;
  while (currentNode.next !== null) {
    if (currentNode.next.data === key) {
      currentNode.next = currentNode.next.next;
      return;
    }
    currentNode = currentNode.next;
  }
  console.log(`${key} is not found.`);
};

//* Search a value:-
LinkedList.prototype.search = function (key) {
  let currentNode = this.head;
  while (currentNode) {
    if (currentNode.data === key) {
      return currentNode;
    }
    currentNode = currentNode.next;
  }
  return null ;
};

//* travarse:-
LinkedList.prototype.printList = function (){
    let currentNode = this.head;
    let value = [];
    while(currentNode){
        value.push(currentNode.data);//* add data to the list
        currentNode = currentNode.next;
    }

    if(value.length===0){
        console.log("The List is Empty.");
        return;
    }
    console.log(value.join("->"));
}

//* Reverse the List:-
LinkedList.prototype.reverse = function (){
  if(!this.head){
    console.log("List is Empty.");
    return;
  }
  let current = this.head;
  let next = null;
  let prev =  null;
  while(current){
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  this.head = prev; 
}

const firstList = new LinkedList();
firstList.insertAtBeginning(5);
firstList.insertAtEnd(7);
firstList.printList();
firstList.insertAtAnyPoint(firstList.search(5),6);
firstList.printList();