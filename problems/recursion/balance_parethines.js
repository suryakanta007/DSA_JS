//* input = ["(","(",")",")","(",")"];


//*otarative approch:-
const isBalance = (arr,startIndex=0)=>{
    let count  = 0;
    for(let i = startIndex;i<arr.length;i++){
        if(arr[i]==="("){
            count++;
        }else if(arr[i]===")"){
            count--;
        }
    }
    if(!count){
        return true;
    }else{
        return false;
    }
}
// let arr =  ["(","(",")",")","(",")"];
// console.log(isBalance(arr));

//* recursive Approch:-
const recursiveIsBalance = (arr,startIndex=0,currValue=0)=>{
    if(startIndex == arr.length){
        return currValue == 0;
    }
    if(currValue<0){
        return false;
    }
    if(arr[startIndex]==="("){
        return recursiveIsBalance(arr,startIndex+1,currValue+1);
    }else if(arr[startIndex]===")"){
        return recursiveIsBalance(arr,startIndex+1,currValue-1);
    }
}
// console.log(recursiveIsBalance(arr));

//TODO Now try another problem like this where have multitype of bracket. check that is balance or not.

const recurMultiIsBalance = (arr,startIndex=0,currValue=0)=>{
    if(startIndex===arr.length){
        return currValue === 0;
    }
    if(currValue<0){
        return false
    }
    if(arr[startIndex]==="("||arr[startIndex]==="{"||arr[startIndex]==="["){
        return recurMultiIsBalance(arr,startIndex+1,currValue+1);
    }else if(arr[startIndex]===")"||arr[startIndex]==="}"||arr[startIndex]==="]"){
        return recurMultiIsBalance(arr,startIndex+1,currValue-1);
    }
}
let arr = ['{',  ']', ];
console.log(recurMultiIsBalance(arr));