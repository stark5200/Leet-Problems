function closeStrings(word1: string, word2: string): boolean {
  let newWord1 = word1.split("");
  let newWord2 = word2.split("");
  let length1 = newWord1.length;
  if (length1 != newWord2.length) {
    return false;
  }
  const count1: number[] = new Array(26).fill(0);
  const count2: number[] = new Array(26).fill(0);

  for (let i = 0; i < word1.length; i++) {
    count1[word1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    count2[word2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
  }

  for (let i = 0; i < 26; i++) {
    if ((count1[i] === 0 && count2[i] !== 0) || (count1[i] !== 0 && count2[i] === 0)) {
        return false;
    }
  }

  count1.sort((a, b) => a - b);
  count2.sort((a, b) => a - b);

  for (let i = 0; i < 26; i++) {
    if (count1[i] !== count2[i]) {
        return false;
    }
  }
 
  return true;
};
