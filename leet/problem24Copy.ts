function RemoveStars(s: string): string {
  const stack: number[] = [];

  for (let i = 0; i < s.length; i++) {
      if (s[i] === '*') {
        console.log("starting s = : " + s);
        stack.push(i);
        console.log("i = : " + i);
        console.log("s[i] = : " + s[i]);
        console.log("stack = : " + stack);
        const prevStarIndex = stack.pop()!;
        console.log("prevStarIndex = : " + prevStarIndex);
        s = s.slice(0, prevStarIndex-1) + s.slice(i + 1, s.length);
        console.log(" new s = : " + s);
        prevStarIndex >= 2 ? i = prevStarIndex - 2: i = 0; // Move the index back to the previous star
        console.log("endloop i = : " + i);
      }
  }

  return s;
}

console.log(RemoveStars("leet**cod*e*"));


/*current code 

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
*/


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


Wrong gpt solution

function removeStars(s: string): string {
    const stack: number[] = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '*') {
            stack.push(i);
        } else if (stack.length > 0) {
            const prevStarIndex = stack.pop()!;
            s = s.slice(0, prevStarIndex) + s.slice(i + 1);
            i = prevStarIndex - 1; // Move the index back to the previous star
        }
    }

    return s;
}

*/ 