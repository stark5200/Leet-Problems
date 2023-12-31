function gcdStrings(str1: string, str2: string): String {
  let matches: string[] = [];
  let result = "";
  let short = "";
  let long = "";
  let mlen = Math.min(str1.length,  str2.length);
  let Mlen = Math.max(str1.length,  str2.length);
  if (str1.length == mlen) {
    short = str1;
    long = str2;
  } else {
    short = str2;
    long = str1;
  }
  console.log("shorter string is: '" + short + "', " + "longer string is: '" + long + "'.");

  for (let i = 0; i < mlen; i++) {
    for (let j = 0; j < Mlen; j++) {
      if( (short.charAt(i) == long.charAt(j)) && !matches.includes(short.charAt(i)) ) {
        matches.push(short.charAt(i));
        if( (short.charAt(i+1) == long.charAt(j+1)) && !matches.includes(short.charAt(i).concat(short.charAt(i+1))) ) {
          matches.push(short.charAt(i).concat(short.charAt(i+1)));
        }
      }
    }
  }
  console.log("current matches: ");
  console.log(matches);
  return(result); 
}

gcdStrings("love me", "hello");
        