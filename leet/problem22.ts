function closeStrings(word1: string, word2: string): boolean {
  let newWord1 = word1.split("");
  let newWord2 = word2.split("");
  let length1 = newWord1.length;
  if (length1 != newWord2.length) {
    return false;
  }
  let diff1: string[] = [] 
  let diff2: string[] = [] 
  let similiar = 0;
  for (let i in newWord1) {
    newWord1[i] == newWord2[i] ? similiar++ : diff1.push(newWord1[i]), diff2.push(newWord2[i]);
  } 
  if (similiar == length1) { 
    return true;
  } 
  if (length1 - similiar == 2) { 
    if (diff1[1] == diff2[2] && diff1[2] == diff2[1]) {
      return true;
    } else {
      return false;
    }
  } 
  let same = 1;
  for (let j in diff1) {
    diff1[j] != diff2[-(j+1)] ? same=0 : null;
  } 
  return true;
  // this problem is a bit difficult
};

/* chat gpt solution
function closeStrings(word1: string, word2: string): boolean {
    if (word1.length !== word2.length) {
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
}

*/