var reverseWords = function(s) {
    let result = []
    let words = ""
    let length = s.length
    for(let i = length-1;i>=0;i--){
        if(s[i]!==" "){
            words += s[i];
        }else if(words.length>0){
            words = words.split("")
            words = words.reverse()
            words = words.join("")
            result.push(words);
            words = ""
        }
    }
    if(words.length>0){
        words = words.split("")
        words = words.reverse()
        words = words.join("")
        result.push(words);
    }

    return result.join(" ");
};  