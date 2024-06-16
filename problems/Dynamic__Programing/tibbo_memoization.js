function tiboMemo(n,memo={}){
    if(n in memo){
        return memo[n];
    }
    if(n===0){
        return 0;
    }
    if(n===1||n===2){
        return 1;
    }
    memo[n]=tiboMemo(n-1,memo)+tiboMemo(n-2,memo)+tiboMemo(n-3,memo);
    return memo[n];
}
console.log(tiboMemo(5));