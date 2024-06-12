// How to create a LINKLIST.
class Node{
    constructor(data,next=null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }
}

LinkedList.prototype.insertAtStart = function (data){
    let newNode = new Node(data);
    if(!this.head){
        this.head = newNode;
        return;
    }
    newNode.next = this.head;
    this.head = newNode
}

LinkedList.prototype.insertAtEnd = function(data){
    let newNode = new Node(data);
    if(!this.head){
        this.head = newNode;
        return;
    }
    let currentNode = this.head;
    while(currentNode.next){
        currentNode = currentNode.next;
    }
    currentNode.next = newNode;
};
// insert at any point.
LinkedList.prototype.insertAtAnyPoint = function(prevNode,data){
    if(!prevNode){
        console.log("PrevNode can not be NUll");
        return;
    }
    let newNode = new Node(data,prevNode.next);
    prevNode.next = newNode;
}
//search.
LinkedList.prototype.search = function (key){
    if(!this.head){
        console.log("List is empty");
        return;
    }
    if(this.head.data === key){
        return true;
    }
    let currentNode = this.head;
    
    while(currentNode.next){
        if(currentNode.next.data === key){
            return true;
        }
        currentNode = currentNode.next;
    }

    return false;
}
LinkedList.prototype.printList = function (){
    if(!this.head){
        console.log("List is Empty.");
        return;
    }
    let arr = []
    arr.push(this.head.data);
    let currentNode = this.head;
    while(currentNode.next){
        arr.push(currentNode.next.data);
        currentNode = currentNode.next;
    }
    console.log(arr.join("->"));
}
LinkedList.prototype.deleteFirstNode = function (){
    if(!this.head){
        console.log("Nothing to delete.");
        return;
    }
    this.head = this.head.next;
}
LinkedList.prototype.deleteLastNode = function(){
    if(!this.head){
        console.log("Nothing to Delete.");
        return ; 
    }
    if(!this.head.next){
        this.head = null;
        return ; 
    }
    let currentNode = this.head;
    while(currentNode.next.next){
        currentNode = currentNode.next;
    }
    currentNode.next = null;
}

LinkedList.prototype.deleteAtAnyPoint = function(key){
    if(!this.head){
        console.log("List is Empty");
        return;
    }
    if(this.head.data===key){
        this.head = this.head.next;
        return;
    }
    let currentNode = this.head;
    while(currentNode){
        if(currentNode.next.data===key){
            currentNode.next = currentNode.next.next;
            return;
        }
        currentNode = currentNode.next;
    }
    console.log(`${key} is not found in List.`);
}

LinkedList.prototype.reverse = function(){
    if(!this.head){
        console.log("Noting to reverse.");
    }
    if(!this.head.next){
        console.log("Already reversed.");
        return;
    }
    let currentNode = this.head;
    let next = null;
    let prev = null;
    while(currentNode){
        next = currentNode.next;
        currentNode.next = prev;
        prev = currentNode;
        currentNode = next;
    }
    this.head = prev;
}