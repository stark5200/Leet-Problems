function maxOperations(nums: number[], k: number): number {
  nums.sort((n1,n2) => n1 - n2);
  console.log(nums);
  let ops = 0;
  let l = 0;
  let r = nums.length-1;
  if (nums.length <= 1) return 0;
  
  while (l < r) {
    if ( nums[l] > k ) return ops;
    while ( nums[r] > k ) {
      r--;
      if (l == r) {
        return ops;
      }
    }
    let sum = nums[l]+nums[r]; 
    if ( sum == k ) {
      ops++;
      nums.splice(l, 1);
      nums.splice(r-1, 1);
    } else if (sum < k){
      l++;
    } else {
      r--;
    }
  }
  console.log("final state of nums: ");
  console.log(nums);
  return ops; 
};

maxOperations([63,10,28,31,90,53,75,77,72,47,45,6,49,13,77,61,68,43,33,1,14,62,55,55,38,54,8,19,73,5,1,2,53,29,49,73,23,5], 59);