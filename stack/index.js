//Create a Srack,add,remove,peek,bottom,isEmpty,size,clear,contains,reverse,printStack
class Stack{
    constructor(){
        this.stack = [];
    }

   addData(data){
    this.stack.push(data);
   }

   pop(){
    this.stack.pop();
   }

   peek(){
    return this.stack[this.stack.length-1];
   }

   bottom(){
    return this.stack[0];
   }

   isEmpty(){
    return this.stack.length === 0;
   }

   sizeOf(){
    return this.stack.length;
   }

   clear(){
    return this.stack = [];
   }

   isContains(element){
    return this.stack.includes(element);
   }

   reverse(){
    return this.stack.reverse();
   }

   printStack(){
    let str = ''
    for(let i=0;i<this.stack.length;i++){
        str += `${this.stack[i]}\n`
    }
    return str;
   }

}

let firstStack = new Stack();
firstStack.addData(4);
firstStack.addData(8);
firstStack.addData(9);
firstStack.addData(10);
firstStack.addData(11);

console.log(firstStack.printStack());
firstStack.reverse();
console.log(firstStack.printStack());
