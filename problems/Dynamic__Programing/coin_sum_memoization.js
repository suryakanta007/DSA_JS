function sumPossible(amount,numbers,memo={}){
    if(amount in memo) return memo[amount];
    if(amount===0){
        return true;
    }
    if(amount<0){
        return false;
    }
    let size = 0;
    for(let num of numbers){
        if(sumPossible(amount-num,numbers,memo)){
            memo[amount] = true;
            return true;
        }
    }
    memo[amount] = false;
    return false;   
}
let amount = 15;
let numbers = [4,6,10];
console.log(sumPossible(amount,numbers));