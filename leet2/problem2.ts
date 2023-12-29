function gcdStrings(str1: string, str2: string): String {
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
  return(result); 
}

gcdStrings("a22graf", "helloo");
        