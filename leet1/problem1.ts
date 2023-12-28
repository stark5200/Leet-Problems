function mergeAlternately(word1: string, word2: string): String {
let merged = "";
let tlen   = word1.length + word2.length;
let mlen = Math.max(word1.length,  word2.length);
for (let i = 0; i < mlen; i++) {
  if (i < word1.length) {
    merged+=word1.charAt(i);
  }
  if (i < word2.length) {
    merged+=word2.charAt(i);
  }
} 
console.log("merged string: '" + merged + "' is of length:" + tlen);
return(merged);
};

let merged = mergeAlternately("abcd", "123");
console.log(mergeAlternately);