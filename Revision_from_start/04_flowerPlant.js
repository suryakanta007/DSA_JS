var canPlaceFlowers = function(flowerbed, n) {
  let count = 0;
  for(let i = 0;i<flowerbed.length;i++){
    if(flowerbed[i]===0){
        let isLeftEmpty = i===0||flowerbed[i-1]===0;
        let isRightEmpty = i===flowerbed.length-1||flowerbed[i+1]===0;
        if(isLeftEmpty&&isRightEmpty){
            count++;
            flowerbed[i] = 1
            if(count>=n){
                return true;
            }
        }
    }
  }  
  return count>=n;
    
};

let arr =  [1,0,0,0,0,1]
let n = 2
console.log(canPlaceFlowers(arr,n))