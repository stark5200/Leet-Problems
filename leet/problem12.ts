function maxArea(height: number[]): number {
  let max = 0;
  let l = 0;
  let r = height.length-1;

  while (l < r) {
    let waterarea = (r-l)*Math.min(height[l], height[r]); 
    if ( waterarea > max ) {
      max = waterarea;
    }
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }
  console.log(max);
  return max;    
};

maxArea([3,4,1,5,6,2]);

/* chatgpt solution

function maxArea(height: number[]): number {
    let maxWater = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        const h = Math.min(height[left], height[right]);
        const w = right - left;
        const currentWater = h * w;

        maxWater = Math.max(maxWater, currentWater);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
}

*/