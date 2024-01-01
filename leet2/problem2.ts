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

function gcdOfStrings(str1: string, str2: string): string {
  if (str1 + str2 !== str2 + str1) {
      return '';
  }

  const gcd = (a: number, b: number): number => {
      if (b === 0) {
          return a;
      }
      return gcd(b, a % b);
  };

  const len1 = str1.length;
  const len2 = str2.length;
  const divisorLength = gcd(len1, len2);

  return str1.substring(0, divisorLength);
}

// Example usage:
const str1 = "abcabc";
const str2 = "rpg";
const result = gcdOfStrings(str1, str2);
console.log("Largest string x that divides both str1 and str2:", result);

gcdStrings("love me", "hello");

// chat gpt try 2

function gcdOfStrings2(str1: string, str2: string): string {
  const gcd = (a: number, b: number): number => {
      if (b === 0) {
          return a;
      }
      return gcd(b, a % b);
  };

  const len1 = str1.length;
  const len2 = str2.length;
  const divisorLength = gcd(len1, len2);

  const divisor = str1.substring(0, divisorLength);
  if (divisor.repeat(len1 / divisorLength) === str1 && divisor.repeat(len2 / divisorLength) === str2) {
      return divisor;
  }

  return '';
}

// Example usage:
const s1 = "DREAM";
const s2 = "DAREME";
const r = gcdOfStrings2(s1, s2);
console.log("xxxxxxxxxxxxxx Largest string x that divides both s1 and s2:", r);
        