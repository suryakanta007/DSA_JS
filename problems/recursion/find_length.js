//* itarative Approch:-

const giveLenght = (string)=>{
    let length =0;
   for(let char of string){
    length++
   }
   return length;
}
let str = "Hello";
// console.log(giveLenght(str));

//* recursive approch:-
const recurLength = (string)=>{
    if(string===""){
        return 0;
    }
    return 1+recurLength(string.substring(1));
}
console.log(recurLength(str));

