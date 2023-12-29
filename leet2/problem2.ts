function gcdStrings(str1: string, str2: string): String {
  let matches: string[] = [];
  let result = "";
  let short = "";
  let long = "";
  let mlen = Math.min(str1.length,  str2.length);
  if (str1.length == mlen) {
    short = str1;
    long = str2;
  } else {
    short = str2;
    long = str1;
  }
  console.log("shorter string is: '" + short + "', " + "longer string is: '" + long + "'.");

  for (let i = 0; i < mlen; i++) {
    for (let j = 0; j < mlen; j++) {
      result = "ij";
    }
  }
  return(result); 
}

gcdStrings("a22graf", "helloo");
        