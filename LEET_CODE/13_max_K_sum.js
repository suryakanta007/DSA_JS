//* First Try :- 
// var maxOperations = function(nums, k) {
//   let count = 0;
//   let visited = new Set();
//   for(let i = 0;i<nums.length;i++){
//     for(let j = i+1;j<nums.length;j++){
//         if(nums[i]+nums[j]==k){
//            if(!visited.has(`${nums[i]},${nums[j]}`)){
//                 visited.add(`${nums[i]},${nums[j]}`);
//                 visited.add(`${nums[j]},${nums[i]}`);
//                 count++;
//            }
//         }
//     }
//   }  
//   return count;
// };

//* 2nd Method :-
var maxOperations = function(nums, k) {
    let map = new Map();
    let operation = 0;
    for (const num of nums) {
        let compliment = k-num;
        if(map.get(compliment)>0){
            operation++
            map.set(compliment,map.get(compliment)-1);
        }else{
            map.set(num,(map.get(num)||0)+1);
        }
    }
    return operation;
}