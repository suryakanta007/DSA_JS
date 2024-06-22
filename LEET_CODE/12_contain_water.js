var maxArea = function(height) {
    let maxWater = 0;
    let left = 0;
    let right = height.length-1;

    while(left<right){
        let currHeight = Math.min(height[left],height[right]);
        let currWidth = right-left; 

        let currArea = currHeight*currWidth;
        maxWater = Math.max(maxWater,currArea);
        if(height[left]<height[right]){
            left++;
        }else{
            right--;
        }
    }
    return maxWater;
};