// to run code: ts-node problem3.ts, to compile new js version: tsc problem3.ts, to run js version: node problem3.ts
function kidCandies(candies, extraCandies) {
    var max = Math.max.apply(Math, candies);
    var nkids = candies.length;
    var table = [];
    console.log(max);
    console.log(nkids);
    console.log(candies);
    for (var i = 0; i < nkids; i++) {
        if (candies[i] + extraCandies >= max) {
            table.push(true);
        }
        else {
            table.push(false);
        }
    }
    return table;
}
;
console.log(kidCandies([2, 6, 4], 2));
/* best solution:
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const mostCandies = Math.max(...candies);
    return candies.map((candyAmount) => candyAmount + extraCandies >= mostCandies)
};

*/ 
