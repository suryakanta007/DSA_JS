function tiboTab(n){
    if(n===0){
        return 0;
    }
    if(n==2||n==1){
        return 1;
    }
    let table = Array(n+1).fill(0);
    table[1]=1;
    table[2]=1;
    for(let i= 3;i<=n;i++){
        table[i]= table[i-1]+table[i-2]+table[i-3];
    }
    console.log(table);
    return table[n];
}

console.log(tiboTab(9));
