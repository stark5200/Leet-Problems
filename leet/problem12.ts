function maxArea(height: number[]): number {
  let areaMatrix: number[][] =[]
  let max = 0;
  for (let i = 0; i < height.length-1; i++) {
    areaMatrix[i] = []
    for (let j = i+1; j < height.length ; j++) {
      areaMatrix[i].push(Math.abs(i-j) * Math.min(height[i], height[j]))
    }
  }
  console.log(areaMatrix);
  let maxes:number[] = []
  for (let i = 0; i < height.length-1; i++) {
    maxes.push(Math.max(...areaMatrix[i]))
  }
  return Math.max(...maxes)    
};

console.log(maxArea([3,4,1,5,6,2]));

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