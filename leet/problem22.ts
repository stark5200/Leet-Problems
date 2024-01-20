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
};