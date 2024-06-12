//* let see is a given array like arr = [4,5,6,7,8];
//* find me = 7
//* currindex = 1
//* ->  output = 3
//* if not found= -1

const firstOccurance = (arr,findMe,currIndex) =>{
    while(currIndex<arr.length){
        if(arr[currIndex]==findMe){
            return currIndex;
        }
        currIndex = currIndex + 1;
    }
    return -1;
}
// let arr = [4,5,6,7,8];
// console.log(firstOccurance(arr,7,1));


//* recuresive way:-
const recursiveOcc = (arr,findMe,currIndex) =>{
    if(currIndex===arr.length-1){
        return -1;
    }
    if(arr[currIndex]===findMe){
        return currIndex;
    }
    return recursiveOcc(arr,findMe,currIndex+1);
} 
let arr = [4,5,6,7,8];
console.log(recursiveOcc(arr,7,1));

