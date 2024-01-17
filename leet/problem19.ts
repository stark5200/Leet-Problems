function pivotIndex(nums: number[]): number { 
  let rsum = (...arr: number[]) => [...arr.slice(1)].reduce((x, y) => x + y, 0); 
  let left = 0;
  let right = rsum(...nums);
  for (let num in nums) {
    if (left == right) {
      return Number(num) 
    }
    left += nums[Number(num)];
    right -= nums[Number(num)+1];
  }
  return -1;  
};

pivotIndex([1,7,3,6,5,6]);