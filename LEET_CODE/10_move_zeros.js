var moveZeroes = function(nums) {
    let writeIndex = 0;
    for(let readIndex = 0;readIndex<nums.length;readIndex++){
        if(nums[readIndex]!==0){
            nums[writeIndex] = nums[readIndex];
            writeIndex++;
        }
    }

    for(;writeIndex<nums.length;writeIndex++){
        nums[writeIndex]=0;
    }
    return nums;
};