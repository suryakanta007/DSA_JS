class Node{
    constructor(data,next=null,prev=null){
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }
}

LinkedList.prototype.insertAtBegnning = function (data){
    let newNode = new Node(data,this.head);
    if(!this.head){
        this.head = newNode;
        this.tail  = newNode;
        return;
    }
    if(this.head!==null){
        this.head.prev = newNode;
        this.head = newNode;
    }
}
LinkedList.prototype.insertAtEnd = function(data){
    let newNode = new Node(data,null,this.tail);
    if(!this.tail){
        this.head = null;
        this.tail = null;
    }
    if(this.tail !== null){
        this.tail.next = newNode;
        this.tail = newNode;
    }
}

LinkedList.prototype.insertAtAnyPoint = function(prevNode,data){
    if(!prevNode){
        console.log("prev node cant't be null");
        return;
    }
    let newNode = new Node(data,prevNode.next,prevNode);
    if(!this.head){
        console.log("List is empty");
        return;
    }
    if(prevNode.next===null){
        this.tail= newNode;
    }
    prevNode.next.prev = newNode;
    prevNode.next = newNode;
}
LinkedList.prototype.deleteFirstNode = function (){
   if(!this.head){
    console.log("list is empty");
    return;
   }
   if(this.head===this.tail){
    this.head = null;
    this.tail = null;
    return;
   }
   this.head = this.head.next;
   this.head.prev = null;
}
LinkedList.prototype.deleteLastNode = function(){
    
}