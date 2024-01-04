// to run code: ts-node problem3.ts, to compile new js version: tsc problem3.ts, to run js version: node problem3.ts

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let space: number = n;
    let size = flowerbed.length;
    if (space == 0) {
      return true;
    }
    if (size == 1) {
      return flowerbed[0] == 1 ? false : true; 
    }
    flowerbed[0] == 1 ? null : (flowerbed[1] == 0 ? (flowerbed[0] = 1, space -= 1) : null);
    for (let i = 1; i < size-1; i++) {
      flowerbed[i] == 1 ? null : (flowerbed[i-1] == 0 && flowerbed[i+1] == 0 ? (flowerbed[i] = 1, space -= 1)  : null);
    }
    flowerbed[size-1] == 1 ? null : (flowerbed[size-2] == 0 ? (flowerbed[size-1] = 1, space -= 1) : null);
    return space > 0 ? false : true;
};

// to track progress:
/* canPlaceFlowers([1, 0, 0, 0, 1, 0, 0, 1, 0], 3);
 * console.log("number of remaining inserts: " + space);
 * console.log("current flower bed " + flowerbed);
 */