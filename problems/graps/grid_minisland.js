function findMin(grid){
    let rows = grid.length;
    let cols = grid[0].length;

    let visited = new Set();
    let smallest = Infinity;
    function dfs(r,c){
        let pos  = `${r},${c}`;
        if(
            r<0||
            r>=rows||
            c<0||
            c>=cols||
            grid[r][c]==='W'||
            visited.has(pos)
        ){
            return 0;
        }
        visited.add(pos);
        size = 1;

        size = size+dfs(r-1, c);
        size = size+dfs(r+1, c);
        size = size+dfs(r, c-1);
        size = size+dfs(r, c+1);

        return size;
    }

    for(let r=0;r<rows;r++){
        for(let c=0;c<cols;c++){
            if(grid[r][c]==='L'&&!visited.has(`${r},${c}`)){
                let landSize =dfs(r,c);
                if(landSize<smallest){
                    smallest = landSize;
                }
            }
        }
    }
    return smallest;
}

const grid = [
    ["L", "W", "L", "L", "W"],
    ["L", "L", "W", "L", "W"],
    ["W", "W", "L", "W", "L"],
    ["L", "L", "W", "W", "L"],
  ];

  console.log(findMin(grid));