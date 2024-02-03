function decodeString(s: string): string {
  let stack: any[] = [1];
  let newNumber: string[] = [] 
  let brackets = 0;
  for (let i = 0; i < s.length; i++) {
    const parsedInt: number | null = parseInt(s[i], 10);
    if (!isNaN(parsedInt)) {
      newNumber.push(s[i])
    } 
    if (s[i] == "[") {
      let multiply: number = parseInt(newNumber.join(""), 10);
      newNumber = []; 
      return decodeString( findClosingBracket(s.slice(i+1, s.length)).repeat(multiply) );
    } else {
      return decodeString( findClosingBracket(s.slice(i+1, s.length)) )
    }
  }
  return "decode";  
};

function findClosingBracket(search: string): string {
  let count = 1;
  for (let j = 0; j < search.length; j++) {
    if (count === 0) {
      return search.slice(0, j);
    }
    if (search[j] == "[") { count++; }
    else if (search[j] == "]") { count--; }
  }
  return search
}