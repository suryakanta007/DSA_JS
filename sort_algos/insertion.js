 function insertionSort(arr){
    for(let i = 0;i<arr.length;i++){
        let currentEle = arr[i];
        let j = i-1;
        while(j>=0&&arr[j]>currentEle){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1]=currentEle;
    }
    return arr;
 }
 let arr = [1,6,7,4,2,9];
 console.log(insertionSort(arr));