function longestOnes(nums: number[], k: number): number {
  let maxOnes = 0;
  for (let num = 0; num <= nums.length; num++) {
    let ones = 0;
    let counter = num;
    let extra = k;
    while (extra > 0 && counter <= nums.length) {
      if (nums[counter]==1) {
        ones++;
        counter++;
      } else if (nums[counter]==0 && extra > 0) {
        ones++;
        counter++;
        extra--;
      }
    }
    maxOnes = Math.max(ones, maxOnes);
  }
  return maxOnes;  
}

console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3));
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