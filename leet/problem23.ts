function equalPairs(grid: number[][]): number {
  let count = 0;
  let columns: number[][] = [];
  let rows: number[][] = [];
  for (let i in grid) {
    let col = grid.map(function(value,index) { return value[i]}); 

    let row: number[] = [];
      for (let j = 0; j < grid.length; j++) {
          row.push(grid[i][j]);
      }

    rows.push(row);
    columns.push(col);
  }

  for (let r in rows) {
    for (let c in columns) {
      if (JSON.stringify(rows[r]) ===  JSON.stringify(columns[c])) {
        count++;
      }
    }
  }
  return count
};

console.log(equalPairs([[3,2,2,5],[2,7,6,1],[2,7,7,8], [5,8,3,6]]));