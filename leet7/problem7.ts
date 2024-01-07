// to run code: ts-node problem3.ts, to compile new js version: tsc problem3.ts, to run js version: node problem3.ts

function productExceptSelf(nums: number[]): number[] {
  
  let result: number[] = nums;
  let len = nums.length;
  console.log(len)
  for (let i = 0; i < len; i++) {
    let sum = 1;
     for (let j = 0; j < len; j++) {
      j == i ? null : sum = sum * j;
     }
     result[i] == sum;
  }

  console.log(result);
  return result;
};

productExceptSelf([1, 2, 3, 4, 5, 6]);

/* Leet code solution

*/