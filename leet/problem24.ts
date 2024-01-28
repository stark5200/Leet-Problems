function removeStars(s: string): string {
  if (!s.includes("*")) {
    return s;
  }
  let sep = s.split("*");
  //sep.splice(sep.indexOf("*"), 1);
  console.log("lets see: " + sep);
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
  console.log(sep);
  let result = sep.join("");
  return result;  
};

console.log(removeStars("he*l*l*o*"));


/*

*/ 