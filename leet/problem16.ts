function longestOnes(nums: number[], k: number): number {
  let maxOnes = 0;
  let currentOnes = maxOnes;
  for (let num = 0; num <= nums.length; num++) {
    let ones = 0;
    for (let extra = k; k > 0; k--) {
      if (nums[num]==1) {
        ones++;
      } else if (nums[num]==0 && extra > 0) {
        ones++;
      } 
    }
    currentOnes = ones;
    maxOnes = Math.max(currentOnes, maxOnes);
  }
  return maxOnes;  
}

longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 10)
console.log("Hiii");
/*
function findMaxAverage(nums: number[], k: number): number {
  let sum = (n: number, ...arr: number[]) => [...arr.slice(n, n+k)].reduce((x, y) => x + y, 0); 
  let max = sum(0, ...nums);
  console.log("initial max is: "+max);
  let currentsum = max;
  for (let num = 1; num <= nums.length-k; num++) {
    currentsum = currentsum-nums[num-1]+nums[num+k-1];
    max = Math.max(currentsum, max);
  }
  return max/k;  
};
*/