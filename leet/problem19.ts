function pivotIndex(nums: number[]): number {
  let lsum = (n: number, ...arr: number[]) => [...arr.slice(0, n)].reduce((x, y) => x + y, 0); 
  let rsum = (n: number, ...arr: number[]) => [...arr.slice(n+1)].reduce((x, y) => x + y, 0); 
  
  for (let num in nums) {
  if (rsum(Number(num), ...nums) == lsum(Number(num), ...nums)) {
    return Number(num) 
  }
  }
  return -1;  
};

pivotIndex([1,7,3,6,5,6]);