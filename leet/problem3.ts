// to run code: ts-node problem3.ts, to compile new js version: tsc problem3.ts, to run js version: node problem3.ts

function KidCandies(candies: number[], extraCandies: number): boolean[] {
  let max = Math.max(...candies);
  let nkids = candies.length;
  let table: boolean[] = [];
  console.log(max);
  console.log(nkids);
  console.log(candies);
  for (let i = 0; i < nkids; i++) {
    if (candies[i]+extraCandies >= max) {
      table.push(true);
    } else {
      table.push(false);
    }
  }
  return table;
};


console.log(KidCandies([2, 6, 4], 2));

/* best solution:
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const mostCandies = Math.max(...candies);
    return candies.map((candyAmount) => candyAmount + extraCandies >= mostCandies)
};

*/