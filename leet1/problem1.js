function mergeAlternately(word1, word2) {
    var merged = "";
    var tlen = word1.length + word2.length;
    var mlen = Math.max(word1.length, word2.length);
    for (var i = 0; i < mlen; i++) {
        if (i < word1.length) {
            merged += word1.charAt(i);
        }
        if (i < word2.length) {
            merged += word2.charAt(i);
        }
    }
    console.log("merged string: '" + merged + "' is of length:" + tlen);
    return (merged);
}
;
var merged = mergeAlternately("abcd", "123");
console.log(mergeAlternately);
