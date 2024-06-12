//*itarative Approch:-
const min = (num1,num2)=>{
    if(num1<num2){
        return num1;
    }else{
        return num2;
    }
}
const gcdOfTwo = (num1,num2)=>{
    let ans;
    for(let i=min(num1,num2);i>=0;i--){
        if(num1%i==0&&num2%i==0){
            ans = i;
            break;
        }
    }
    return ans;
}
console.log(gcdOfTwo(18,42));

//* Recrsive Approch:-
const gcd = (num1,num2)=>{
    if(num1==num2){
        return num1;
    }
    if(num1>num2){
        return gcd(num1-num2,num2);
    }else{
        return gcd(num1,num2-num1);
    }
}
// console.log(gcd(18,42));