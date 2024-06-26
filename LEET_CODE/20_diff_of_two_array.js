//* 1st Approch:-
// var findDifference = function(nums1, nums2) {
//     let answer = [[],[]];
//     for (let num =0;num<nums1.length;num++) {
//         if(!nums2.includes(nums1[num])){
//             if(!answer[0].includes(nums1[num])){
//                 answer[0].push(nums1[num]);
//             }
//         }
//     }
//     for (let num =0;num<nums2.length;num++) {
//         if(!nums1.includes(nums2[num])){
//             if(!answer[1].includes(nums2[num])){
//                 answer[1].push(nums2[num]);
//             }
//         }
//     }
//     return answer;
// };

// let nums1 =[1,2,3];
// let nums2 = [2,4,6];

// console.log(findDifference(nums1,nums2));

//*2nd Approch:-
var findDifference = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);

    let unique1 = [...set1].filter((num)=>{
        return !set2.has(num);
    })
    let unique2 = [...set2].filter((num)=>{
        return !set1.has(num);
    })
    return [unique1,unique2];
}