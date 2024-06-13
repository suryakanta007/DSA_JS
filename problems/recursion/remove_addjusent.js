//todo remove adjacent duplicate.
// let inputString = "aabbcc" => abc

// let i = 1

// console.log(inputString.substring(0, i))
// console.log(inputString.substring(i + 1))
// console.log(inputString.substring(0, i) + inputString.substring(i + 1))

function removeAdjDup(inputString){
    let result = "";
    for(let i=0;i<inputString.length;i++){
        if(inputString[i]!==inputString[i+1]){ //! here is a doubt,
            result+=inputString[i];
        }
    }
    return result;
}
// console.log(removeAdjDup("aabbc"));

//* rcursive approch:-
//TODO solve a problem where we need to delete same adjacent element.
const recursiveRemoveAD = (string)=>{
    if(string.length===1){
        return string;
    }
   let firstChar = string[0];
   let restOfString = string.substring(1);
   if(firstChar===restOfString[0]){
    return recursiveRemoveAD(restOfString);
   }
    return firstChar+recursiveRemoveAD(restOfString);
}
console.log(recursiveRemoveAD("aabcc"));


//*2nd method.

// const recursiveRemoveAD = (inputString)=>{//todo resolvo the error problem.
//     if(inputString.length==1){
//         return inputString;
//     }
//     // console.log(inputString.length);
//     if(inputString[0]===inputString[1]){
//        return recursiveRemoveAD(inputString.substring(1));
//     }
//     return inputString[0]+recursiveRemoveAD(recursiveRemoveAD(inputString.substring(1)));
// }
// console.log(recursiveRemoveAD("aabcc"));




