const power = (x,n)=>{
    if(n==1||n==0){
        return x;
    }
    return power(x,n-1)*x;
}
console.log(power(2,3));