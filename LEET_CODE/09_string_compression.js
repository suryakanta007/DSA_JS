var compress = function(chars) {
    let index = 0;
    let i = 0;
    while(i<chars.length){
        let j=i;
        while(j<chars.length&&chars[i]===chars[j]){
            j++
        }
        let count = j-i;
        chars[index++] = chars[i];
        if(count>1){
            for (const num of count.toString()) {
                chars[index++] = num;
            }
        } 
        i = j;
    }
    return index;
};