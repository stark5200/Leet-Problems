function removeStars(s: string): string {
  if (!s.includes("*")) {
    return s;
  }
  let sArray = s.split("");
  console.log(sArray);
  let rArray = sArray.reverse();
  console.log(rArray);
  const asteriskCount = countOccurrences(sArray, "*");
  console.log(asteriskCount);
  const lastIndex = rArray.indexOf("*")
  console.log(lastIndex);
  let fSep = s.split("*");
  let med = fSep.join("");
  let sep = med.split("");
  console.log(sep);
  //if (sep.includes("")) {
  //  sep.splice(sep.indexOf(""));
  //}
  let rSep = sep.reverse();
  console.log(rSep);
  rSep.splice(lastIndex, asteriskCount);
  console.log(rSep);
  return rSep.reverse().join("");  
};

function countOccurrences(arr: string[], target: string): number {
  return arr.filter(item => item === target).length;
}

console.log(removeStars("he*l*l*o*"));


/* old code 

function removeStars(s: string): string {
    if (!s.includes("*")) {
    return s;
  }
  let sep = s.split("");
  let length = sep.length
  for (let i = length-1; i >= 0; i--) {
    let check = true;
    if (sep[i]=="*") {
      for (let j = i; j >= 0 && check; j-- ) {
        if (sep[j]!="*") {
          sep.splice(i, 1);
          sep.splice(j, 1);  
          length = sep.length;
          check = false;
        }
      }
    }
  }
  let result = sep.join("");
  return result  
};

*/ 