var gcdOfStrings = function(str1, str2) {
    if(str1+str2!== str2+str1){
        return "";
    }

    function gcd(str1,str2){
        if(str1.length===0){
            return str2;
        }

        return gcd(str1,str2.slice(0,str1.length%str2.length));
    }

    return gcd(str1,str2);
};