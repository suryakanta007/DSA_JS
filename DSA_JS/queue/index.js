// Create a Queue ,add,remove,peek,bottom,isEmpty,size,clear,contains,reverse,printQueue.

class Queue {
    //create a queue
    constructor(){
        this.queue = []
    }

    // add a data
    addData(data){
        this.queue.push(data);
    }

    isEmpty(){
        return this.queue.length === 0;
    }
    remove(){
        if(this.isEmpty()){
            return "Queue is Empty"
        }
       return this.queue.shift();
    }

    // peek
    peek(){
        return this.queue[0];
    }

    printQueue(){
        let str = "";
        for(let i in this.queue){
            str += `${this.queue[i]}\n`
        }
        return str;
    }
   


}

let myQueue = new Queue();
myQueue.addData(56);
myQueue.addData(6);
myQueue.addData(5);
myQueue.addData(9);
console.log(myQueue.printQueue());
console.log(`deleted item: ${myQueue.remove()}`);
console.log(myQueue.printQueue());
