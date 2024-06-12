//*itarative approch:-
const countKey = (arr,key,index = 0)=>{
    let count = 0;
    for(let i= index;i<arr.length;i++){
        if(arr[index]===key){
            count++
        }
    }
    return count;
}

//* recursive approch:-
const recursiveCountKey = (arr,key,index=0)=>{
    if(index>=arr.length){
        return 0;
    }
    if(arr[index]===key){
        console.log(arr[index])
        return 1+recursiveCountKey(arr,key,index++);
    }else{
        console.log("count")
        return 0+recursiveCountKey(arr,key,index++);
    }
}
let arr = [2,4,6,7,8,2,6,7,2];
console.log(recursiveCountKey(arr,2,0));