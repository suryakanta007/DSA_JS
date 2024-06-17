function countPath(gird,row=0,col=0){
    let pos = `${row},${col}`;
    if(
        row>=gird.length||
        col>=gird[0].length||
        gird[row][col]==="X"
    ){
        return 0 
    }

    //* check arrive the destion or not
    if(row===gird.length-1&&col===gird[0].length-1){
        return 0;
    } 

    //* check in the memo ;
    if(pos in memo){
        return memo[pos];
    }

    bottomPath = countPath(gird,row+1,col);
    rightPath = countPath(gird,row,col+1);

    memo[pos] = bottomPath+rightPath;
    return memo[pos];   
}