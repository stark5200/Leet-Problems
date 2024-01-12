/**
 Do not return anything, modify nums in-place instead.
 */
 function moveZeroes(nums: number[]): void {
  for (let n = 0; n < nums.length; n++) {
    nums[n] == 0 ? (nums.splice(n, 1), nums.push(0)) : null;
  }  
};