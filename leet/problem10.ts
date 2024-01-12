/**
 Do not return anything, modify nums in-place instead.
 */
 function moveZeroes(nums: number[]): void {
  let i = 0;
  for (let n = 0 ; n < nums.length; n++) {
    nums[i] == 0 ? (nums.splice(i, 1), nums.push(0)) : i++;
  }  
};

/* Optimal solution

function moveZeroes(nums: number[]): void {
  let writePointer = 0;
  for (let readPointer = 0; readPointer < nums.length; readPointer ++) {
    const val = nums[readPointer];
    nums[readPointer] = 0;
    if (val!==0) {
      nums[writePointer] = val;
      writePointer ++;
    }
  }
};

*/