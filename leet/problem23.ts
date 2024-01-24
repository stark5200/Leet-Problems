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

  console.log("cols: ");
  console.log(columns);
  console.log("rows: ");
  console.log(rows);

  for (let r in rows) {
    for (let c in columns) {
      console.log(rows[r]);
      console.log(columns[c]);
      if (rows[r] == columns[c]) {
        count++;
        console.log(count)
      }
    }
  }
  return count
};

console.log(equalPairs([[3,2,1,5],[1,7,6,1],[2,7,7,8], [5,8,3,6]]));