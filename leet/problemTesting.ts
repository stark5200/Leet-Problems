function RemoveStars(s: string): string {
  const result: string[] = [];
  let chars = s.split("");

  for (let i = s.length-1; i >= 0; i--) {
    if (chars[i]==="*") {
      chars[i] = "#";
      for (let j = i-1; j >= 0; j--) {
        if (chars[j]!=="*" && chars[j]!=="#") {
          chars[j] = "#";
          break;
        }
      }  
    }
  }

  let mid = chars.join('');
  for (let k = 0; k < mid.length; k++) {
    if (mid[k] !== '#') {
        result.push(mid[k]);
    }
  }

  return result.join('');

}

console.log(RemoveStars("leet**cod*e*"));


/* Some comments 


*/


