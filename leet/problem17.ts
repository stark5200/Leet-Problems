function longestSubarray(nums: number[]): number {
  let maxOnes = 0;
  for (let num = 0; num <= nums.length - 1; num++) {
    let ones = 0;
    let counter = num;
    //console.log("initial counter for num " + num + " is: " + counter + " , max ones is: " + maxOnes)
    let extra = 1;
    while (counter < nums.length && extra >= 0) {
      if (nums[counter]==1) {
        ones++;
        counter++;
        //console.log("current counter is: " + counter + " , current ones is: " + ones )
      } else if (nums[counter]==0 && extra > 0) {
        ones++;
        counter++;
        extra--;
        //console.log("current counter is: " + counter + " , current ones is: " + ones + " , remaining extra: " + extra)
      } else if ((nums[counter]==0 && extra == 0)){
        break;
      }
    }
    maxOnes = Math.max(ones, maxOnes);
    //console.log("ones is: " + ones + ", max ones: " + maxOnes)
  }
  return maxOnes-1;  
};


/*
chat gpt


Certainly! Here's a TypeScript solution to find the size of the longest non-empty subarray containing only 1's after deleting one element:

typescript
Copy code
function longestSubarray(nums: number[]): number {
    let left = 0;
    let right = 0;
    let zeroCount = 0;
    let maxOnes = 0;

    while (right < nums.length) {
        if (nums[right] === 0) {
            zeroCount++;
        }

        while (zeroCount > 1) {
            if (nums[left] === 0) {
                zeroCount--;
            }
            left++;
        }

        maxOnes = Math.max(maxOnes, right - left + 1);
        right++;
    }

    return Math.max(0, maxOnes - 1);
}

*/