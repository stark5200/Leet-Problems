function maxVowels(s: string, k: number): number {
  let vowels = ["a", "e", "i", "o", "u"];
  let letters = s.split("");
  let numberVowels = (arr: string[]): number => {
    let sectionVowels = 0
    let section = arr.slice(0, k);
    for (let letter in section) {
      if(vowels.includes(section[letter])) {
        sectionVowels++;
      }
    }
    return sectionVowels;
  }
  let max = numberVowels(letters);
  let currentVowels = max;
  for (let num = 1; num <= s.length-k; num++) {
    let diff = 0;
    if (vowels.includes(letters[num-1])) {
      diff--;
    }
    if (vowels.includes(letters[num+k-1])) {
      diff++;
    } 
    currentVowels = currentVowels + diff;
    max = Math.max(currentVowels, max);
  }
  return max;  
};

console.log(maxVowels("leeatcode", 3));

/*


      console.log("letter is " + section[letter])

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