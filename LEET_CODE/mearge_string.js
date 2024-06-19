var mergeAlternately = function(word1, word2) {
    let mearged = "";
    let i = 0;
    let j = 0;
    while(i<word1.length&&j<word2.length){
        mearged+=word1[i];
        mearged+=word2[j];
        i++;
        j++;
    }
  if(word1.length>word2.length){
    let i = word2.length;
    while(i<word1.length){
        mearged+=word1[i];
        i++
    }
  }
  if(word2.length>word1.length){
    let i = word1.length;
    while(i<word2.length){
        mearged+=word2[i];
        i++
    }
  }
    return mearged;
};
let word1 = "abcghi";
let word2 = "def";
console.log(mergeAlternately(word1,word2));