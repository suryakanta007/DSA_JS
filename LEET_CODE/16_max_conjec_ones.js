//! Hard
var longestOnes = function (nums, k) {
  let left = 0;
  let zeroCount = 0;
  let maxLen = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      zeroCount++;
    }
    while (zeroCount > k) {
      if (nums[left] === 0) {
        zeroCount--;
      }
      left++;
    }
    maxLen = Math.max(maxLen,right-left+1);
  }
  return maxLen;
};
let nums  = [1,1,1,0,0,0,1,1,1,1,0];
let k = 2
console.log(longestOnes(nums,k));
