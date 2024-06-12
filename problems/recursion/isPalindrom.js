//*recusive approch:-
const palindrom = (string)=>{
    let reverse ="";
    for(let i = string.length-1;i>=0;i--){
        reverse+= string[i];
    }
    if(string===reverse){
        return true;
    }else{
        return false;
    }
}
// console.log(palindrom("madam"));

//*recursive Approch:-

const isPalindrom = (string)=>{
    if(string.length===1){
        return true;
    }
    if(string[0]===string[string.length-1]){
        return isPalindrom(string.substring(1,string.length-1));
    }else{
        return false;
    }
}
console.log(isPalindrom("madam"));