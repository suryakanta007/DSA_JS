function bubbleSort(array){
    let isSwap ;
    do {
        isSwap = false;
        for(let i = 0;i<(array.length);i++){
            if(array[i]&&array[i+1]&&array[i]>array[i+1]){
                let temp = array[i];
                array[i]= array[i+1];
                array[i+1] = temp;
                isSwap = true;
            }
        }
    } while (isSwap);
    return array;
}
let arr  = [3,6,2,9,4,1];
console.log(bubbleSort(arr));