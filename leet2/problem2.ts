// to run code: ts-node problem3.ts, to compile new js version: tsc problem3.ts, to run js version: node problem3.ts

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
      console.log(divisor.repeat(len1 / divisorLength), divisor.repeat(len2 / divisorLength));
      return divisor;
  }

  return '';
}

// Example usage:
const s1 = "DREAM";
const s2 = "DAREME";
const r = gcdOfStrings2(s1, s2);
console.log("xxxxxxxxxxxxxx Largest string x that divides both s1 and s2:", r);

//

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStr = function(string1, string2) {
  const length = string2.length;
  let greatestCommonDivisor = '';

  // Iterate through `string2` to find the greatest common divisor of `string1` and `string2`
  for (let i = 0; i < length; i++) {
      // Create two substrings from `string2`: one starting from the beginning and one starting from the end
      const substringFromBeginning = string2.substring(0, (length - (i + 1)));
      const substringFromEnd = string2.substring(length - 1 - i);

      // Check if either substring is the greatest common divisor of `string1` and `string2`
      if (string1.replaceAll(substringFromBeginning, '') == '' && 
          string2.replaceAll(substringFromBeginning, '') == '') {
          if (greatestCommonDivisor.length < substringFromBeginning.length) {
              greatestCommonDivisor = substringFromBeginning;
          }
      } 

      if (string1.replaceAll(substringFromEnd, '') === '' && 
          string2.replaceAll(substringFromEnd, '') === '') {
          if (greatestCommonDivisor.length < substringFromEnd.length) {
              greatestCommonDivisor = substringFromEnd;
          }
      }
  }

  return greatestCommonDivisor;
};

//

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdStr = (str1, str2) => {
  // If the concatenated strings are not equal,
  // then a common divisor cannot be found
  if (str1 + str2 !== str2 + str1) {
    return '';
  }

  // Calculate the greatest common divisor of the string lengths
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const len = gcd(str1.length, str2.length);

  // Return the substring that is a common divisor
  return str1.substring(0, len);
        
}