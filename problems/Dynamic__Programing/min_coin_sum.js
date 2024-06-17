function minCoin(amount,conins,memo = {}){
    if(amount in memo){
        return memo[amount];
    }
    if(amount===0){
        return 0;
    }
    if(amount<0){
        return -1;
    }
    let mincoinsCount = Infinity;

    for (const coin of conins) {
       let result =  minCoin(amount-coin,conins,memo);
       if(result !== -1){
        if((result+1)<mincoinsCount){
            mincoinsCount= result+1;
        }
        // mincoinsCount = Math.min(mincoinsCount,result+1);//this line also make the same work
       }
    }
    memo[amount] = mincoinsCount === Infinity ? -1:mincoinsCount;
    return memo[amount];
}
let amount = 15;
let conins  = [4,6,10];
console.log(minCoin(amount,conins));