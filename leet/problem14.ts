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

findMaxAverage([1, 3, 4, 5, 4, 1, 5, 3, 8, 9], 4);


/*

function findMaxAverage(nums: number[], k: number): number {
  let sum = (n: number, ...arr: number[]) => [...arr.slice(n, n+k)].reduce((x, y) => x + y, 0); 
  let max = sum(0, ...nums);
  for (let num = 0; num <= nums.length-k; num++) {
    let subsum = sum(num, ...nums);
    max = Math.max(subsum, max);
  }
  console.log(max/k);
  return max/k;  
};

function maxOperations(nums: number[], k: number): number {
    const numCount = new Map<number, number>();
    let operations = 0;

    for (const num of nums) {
        const complement = k - num;

        if (numCount.has(complement) && numCount.get(complement) > 0) {
            // Pair found, increment operations and update count
            operations++;
            numCount.set(complement, numCount.get(complement)! - 1);
        } else {
            // Increment count for the current number
            numCount.set(num, (numCount.get(num) || 0) + 1);
        }
    }

    return operations;
}
*/