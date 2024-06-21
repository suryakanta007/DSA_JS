let s = "the sky is blue"
var reverseWords = function(s) {
    let newString  = s.replace(/\s+/g, ' ').trim();
    let words = newString.split(" ");
    let reversedWords = [];
    for(let i = words.length-1;i>=0;i--){
        reversedWords.push(words[i]);
    }

    return reversedWords.join(" ");
};

console.log(reverseWords(s));