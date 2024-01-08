// to run code: ts-node problem3.ts, to compile new js version: tsc problem3.ts, to run js version: node problem3.ts

function reverseWords(s: string): string {
  
  let reversed: string[] = [];
  let words: string[] = s.split(/(\s+)/).filter( e => e.trim().length > 0);
  let len = words.length;

  for (let i = len-1; i >= 0; i--) {
     reversed.push(words[i]);
  }

  return reversed.join(" ");
};

console.log(reverseWords(" Hello my old   friend "));

/* Leet code solution

*/