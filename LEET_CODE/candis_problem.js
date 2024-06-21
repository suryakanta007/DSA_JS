
//* 1st Try:-
// var kidsWithCandies = function(candies, extraCandies) {
//     let ans = []
//     for(let i = 0;i<candies.length;i++){
//         let isGreat = candies[i]+extraCandies;
//         console.log(isGreat);
//         let check = 1;
//         for(let j = 0;j<candies.length;j++){
//             console.log("Candies: "+candies[j]);
//             if(isGreat<candies[j]){
//                 check = 0;
//             }
//         }
//         if(check){
//             ans.push(true);
//         }else{
//             ans.push(false);
//         }
//     }
//     return ans;
// };

// let candies = [ 2,3,5,1,3];
// let extra = 3;
// console.log(kidsWithCandies(candies,extra));

//* 2nd try:-
var kidsWithCandies = function(candies, extraCandies) {
    let maxCandie = Math.max(...candies);
    return candies.map((candi)=>{
       return (candi+extraCandies)>=maxCandie;
    })
};