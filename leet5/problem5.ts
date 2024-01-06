// to run code: ts-node problem3.ts, to compile new js version: tsc problem3.ts, to run js version: node problem3.ts

function reverseVowels(s: string): string {
  let vowels: string[] = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let found: string[] = [];
  let letters: string[] = s.split("");
  let len = s.length;

  for (let i = 0; i < len; i++) {
     vowels.includes(letters[i]) ? (found.push(letters[i]), letters[i] = "😎") : null
  }

  for (let j = 0; j < len; j++) {
    letters[j] == "😎" ? letters[j] = found.pop() as string : null
  }
  console.log(letters);
  
  return letters.join("");
};

reverseVowels("Hello");

/* Leet code solution

function reverseVowels(s: string): string {
    let arr = s.split('')
    
    let left = 0
    let right = arr.length - 1
    let n;
    const set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])

    while(left <= right){
        if(set.has(arr[left]) && set.has(arr[right])){
            n = arr[left]
            arr[left] = arr[right]
            arr[right] = n
            left++
            right--
        }else if(!set.has(arr[left])){
            left++
        }else{
            right--
        }
    }

    return arr.join('')
};

*/