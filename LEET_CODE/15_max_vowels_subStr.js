var maxVowels = function(s, k) {
    let vowels = new Set(["a","e","i","o","u"]);
    let currentVowelsCount = 0;
    let maxVowelsCount = 0;
    for(let i = 0;i<k;i++){
        if(vowels.has(s[i]))currentVowelsCount++;
        maxVowelsCount = currentVowelsCount;
    }
    for(let i = k;i<s.length;i++){
        if(vowels.has(s[i]))currentVowelsCount++;
        if(vowels.has(s[i-k]))currentVowelsCount--;
        maxVowelsCount = Math.max(currentVowelsCount,maxVowelsCount);
    }
    return maxVowelsCount;
};