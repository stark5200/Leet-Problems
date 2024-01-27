function equalPairs(grid: number[][]): number {
  let count = 0;
  let columns: number[][] = [];
  let rows: number[][] = [];
  for (let i in grid) {
    let col = grid.map(function(value) { return value[i]}); 

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

/*
function countEqualRowColumnPairs(grid: number[][]): number {
    const n = grid.length;
    let count = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const row = grid[i];
            const column = getColumn(grid, j);

            if (arraysEqual(row, column)) {
                count++;
            }
        }
    }

    return count;
}

function getColumn(grid: number[][], columnIndex: number): number[] {
    return grid.map(row => row[columnIndex]);
}

function arraysEqual(arr1: number[], arr2: number[]): boolean {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}  
  
*/