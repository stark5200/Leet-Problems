function longestOnes(nums: number[], k: number): number {
  let maxOnes = 0;
  let sortedNums = [...nums];
  sortedNums = sortedNums.sort();
  let zeros = sortedNums.indexOf(1);
  if (k >= zeros && zeros > 0) { 
    return nums.length;
  }
  if (k >= nums.length) {
    return k;
  }
  for (let num = 0; num <= nums.length - k; num++) {
    let ones = 0;
    let counter = num;
    //console.log("initial counter for num " + num + " is: " + counter + " , max ones is: " + maxOnes)
    let extra = k;
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
  return maxOnes;  
}

console.log(longestOnes([1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0], 6));

/*
chat gpt solution

This solution uses a sliding window approach to find the maximum number of consecutive 1's. It maintains a window between the left and right pointers, and when encountering a 0, it increments the zeroCount. The window contracts from the left until the number of 0's in the window is less than or equal to k. The maximum consecutive 1's are updated during this process.

function longestOnes(nums: number[], k: number): number {
    let left = 0;
    let right = 0;
    let maxCount = 0;
    let zeroCount = 0;

    while (right < nums.length) {
        if (nums[right] === 0) {
            zeroCount++;
        }

        while (zeroCount > k) {
            if (nums[left] === 0) {
                zeroCount--;
            }
            left++;
        }

        maxCount = Math.max(maxCount, right - left + 1);
        right++;
    }

    return maxCount;
}

*/
