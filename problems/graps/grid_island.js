function countIceLand(grid) {
  let rows = grid.length;
  let cols = grid[0].length;

  let visited = new Set();
  let count = 0;

  function dfs(r, c) {
    if (
      r < 0 ||
      r >= rows ||
      c < 0 ||
      c >= cols ||
      grid[r][c] === "W" ||
      visited.has(`${r},${c}`)
    ) {
      return;
    }
    visited.add(`${r},${c}`);

    dfs(r - 1, c); //check top
    dfs(r + 1, c); //check bottom
    dfs(r, c - 1); //check left
    dfs(r, c + 1); //check rigth
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "L" && !visited.has(`${r},${c}`)) {
        dfs(r, c);
        count++;
      }
    }
  }
  return count;
}

const grid = [
  ["L", "W", "L", "L", "W"],
  ["L", "L", "W", "L", "W"],
  ["W", "W", "L", "W", "L"],
  ["L", "L", "W", "W", "L"],
];

console.log(countIceLand(grid));
