var reverseVowels = function(s) {
    let vowels = "aeiouaAEIOU";
    let charters = s.split("");

    let left = 0;
    let right = charters.length-1;

    while(left<right){
        while(left<right&&vowels.indexOf(charters[left])===-1){
            left++;
        }
        while(left<right&&vowels.indexOf(charters[right])===-1){
            right--;
        }

        if(left<right){
            let temp = charters[left];
            charters[left]=charters[right];
            charters[right]=temp;

            left++;
            right--;
        }
    }
    return charters.join("");
};