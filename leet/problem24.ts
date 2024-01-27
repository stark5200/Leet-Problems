function removeStars(s: string): string {
  let sep = s.split("");
  let length = sep.length
  //let indexToRemove: number[] = [];
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
  console.log(sep);
  let result = sep.join("");
  return result;  
};

console.log(removeStars("hel*l*o*"));


/*

*/ 