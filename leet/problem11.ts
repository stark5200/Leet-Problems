function isSubsequence(s: string, t: string): boolean {
  let S = s.split("")
  let T = t.split("")
  let slen = S.length;
  let tlen = T.length;
  let sr = 0; 
  let tr = 0; 
    while (sr < slen) {
      if (tr > tlen) {
        break;
      }  
      if (S[sr] == T[tr]) {
        sr++;
        tr++; 
      } else {
        tr++;
      }
    }
    if (tr > tlen) {
      return false;
    }  
    return true;
};

console.log(isSubsequence("abc", "abc"));

/* Chat gpt solution

function isSubsequence(s: string, t: string): boolean {
    let sIndex = 0;
    let tIndex = 0;

    while (sIndex < s.length && tIndex < t.length) {
        if (s[sIndex] === t[tIndex]) {
            sIndex++;
        }
        tIndex++;
    }

    return sIndex === s.length;
}

*/