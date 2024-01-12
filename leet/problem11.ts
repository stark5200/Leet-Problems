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