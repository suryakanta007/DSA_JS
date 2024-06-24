var findMaxAverage = function(nums, k) {
    let sum =0
    for(let i = 0;i<k;i++){
        sum += nums[i];
    }
    let maxSum = sum;
    for(let i= k;i<nums.length;i++){
        sum = sum - nums[i-k]+nums[i];
        maxSum = Math.max(sum,maxSum);
    }
    return maxSum/k.toFixed(2);
};