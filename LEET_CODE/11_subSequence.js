var isSubsequence = function(s, t) {
    let sindex= 0;
    for (const i of t) {
        if(sindex===s.length)break;
        if(s[sindex]===i)sindex++;
    }
    return sindex == s.length;
};