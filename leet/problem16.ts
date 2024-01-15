function longestOnes(nums: number[], k: number): number {
  let numberOnes = (arr: number[]): number => {
    let initialOnes = 0
    let section = arr.slice(0, k);
    for (let n in section) {
      if(1 == 1) {
        initialOnes++;
        console.log(section[n]);
      }
    }
    return initialOnes;
  }

  let maxOnes = numberOnes(nums);
  let currentOnes = maxOnes;
  for (let num = 1; num <= nums.length-k; num++) {
    let diff = 0;
    if (nums[num-1]==1) {
      diff--;
    }
    if (nums[num+k-1]==1) {
      diff++;
    } 
    currentOnes = currentOnes + diff;
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