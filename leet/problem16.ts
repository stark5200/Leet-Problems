function longestOnes(nums: number[], k: number): number {
  let maxOnes = 0;
  for (let num = 0; num <= nums.length - k; num++) {
    let ones = 0;
    let counter = num;
    console.log("initial counter for num " + num + " is: " + counter + " , max ones is: " + maxOnes)
    let extra = k;
    while (counter < nums.length && extra >= 0) {
      if (nums[counter]==1) {
        ones++;
        counter++;
        console.log("current counter is: " + counter + " , current ones is: " + ones )
      } else if (nums[counter]==0 && extra > 0) {
        ones++;
        counter++;
        extra--;
        console.log("current counter is: " + counter + " , current ones is: " + ones + " , remaining extra: " + extra)
      } else if ((nums[counter]==0 && extra == 0)){
        break;
      }
    }
    maxOnes = Math.max(ones, maxOnes);
    console.log("ones is: " + ones + ", max ones: " + maxOnes)
  }
  return maxOnes;  
}

console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3));