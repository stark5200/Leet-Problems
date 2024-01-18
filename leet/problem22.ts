function closeStrings(word1: string, word2: string): boolean {
  if (!word1) {
    return false
  } else if (word2) {
    return true
  }
  return true;  
};