var increasingTriplet = function(nums) {
    let smallest = Infinity;
    let secondSmallest = Infinity;
    for (const num of nums) {
        if(num<=smallest){
            smallest = num;
        }else if(num <= secondSmallest){
            secondSmallest = num;
        }else{
            return true ; 
        }
    }
    return false;
};