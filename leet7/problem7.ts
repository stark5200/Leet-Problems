// to run code: ts-node problem3.ts, to compile new js version: tsc problem3.ts, to run js version: node problem3.ts

function productExceptSelf(nums: number[]): number[] {
  
  let mapresult: number[] = [];
  let total = nums.reduce((a, b) => {return a * b;});
  nums.filter(n => n != 0).length < nums.length - 1 ?
   mapresult = nums.map(s => 0) :
   mapresult = nums.map(s => s == 0 ? nums.filter(n => n != 0).reduce((a, b) => {return a * b;}) : total/s);
  return mapresult;
};

console.log(productExceptSelf([1, 0, 3, 4, 0, 6]));

/* Easy Solution
function productExceptSelf(nums: number[]): number[] {
  
  let result: number[] = [];
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    let sum = 1;
     for (let j = 0; j < len; j++) {
      j == i ? null : sum = sum * nums[j];
     }
     result.push(sum);
  }
  return result;
};

productExceptSelf([1, 2, 3, 4, 5, 6]);

*/
/* Leet code solution

*/