//itarative
let fibonacci = (postion)=>{
    let n0 = 0;
    let n1 = 1;
    for(let i = 0 ;i<postion;i++){
        let n3 = n1+n2;
         n0 = n1;
         n1 = n3;
    }

    return n0;
}
// console.log(fibonacci(4));

//* Recursive:-
let recurFibonacci  =(n)=>{
    if(n<=1){
        return n;
    }
    return recurFibonacci(n-1)+recurFibonacci(n-2);
}
console.log(recurFibonacci(9));
//* 0 1 1 2 3 5 8 13 21 34
