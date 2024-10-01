var mergeAlternately = function(word1, word2) {
    let mearged = "";
    let i = 0;
    let j  = 0;
    while(i<word1.length&&j<word2.length){
        mearged +=  word1[i];
        mearged +=  word2[j];
        i++
        j++
    }
    // add remaing charters for word1
    while(i<word1.length){
        mearged += word1[i]
        i++
    }
    while(j<word2.length){
        mearged +=  word2[j]
        j++
    }
    return mearged;
};
console.log( mergeAlternately("abc","pqruv"));