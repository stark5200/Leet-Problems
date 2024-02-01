function removeStars(s: string): string {

  let letters = s.split("");

  let stack: string[] = [];

  if (!letters.includes("*")) return letters.join("");

  for (let i = 0; i < letters.length; i++) {
      if (letters[i] !== '*') {
        stack.push(letters[i]);
      } else {
        stack.pop();
      }
  }

  return stack.join("");
}


console.log(removeStars("he*l*l*o*"));
console.log(removeStars("leet**cod*e"));
console.log(removeStars("erase*****"));


console.log(("erase*****"[3]).repeat(3));



/*

function removeStars(s: string): string {

  let letters = s.split("");

  if (!letters.includes("*")) return letters.join("");

  for (let i = 0; i < letters.length; i++) {
      if (letters[i] === '*') {
        letters[i] = "0";
        letters[i-1] = "0";
        letters = letters.filter((l) => l !== "0");
        i = i - 2;
      }
  }

  return letters.join("");
}

function removeStars(s: string): string {

  for (let i = 0; i < s.length; i++) {
      if (s[i] === '*') {
        s = s.slice(0, i-1) + s.slice(i + 1, s.length);
        i = i - 2;
      }
  }

  return s;
}
*/







/* more broken code

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
}*/



/*
The ! (non-null assertion operator) is used here to assert to the TypeScript compiler that the result won't be undefined. 

old code 

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