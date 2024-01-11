function compress(chars: string[]): number {
    let init = chars[0]; 
    let count = 0;
    let compressed: string[] = [];
    for (let char in chars) {
        if (chars[char] == init) {
            count++;
        } else {
            (compressed.push(init), count > 1 ? compressed.push(count.toString()) : null , init = chars[char] , count = 1)
        };
    }
    compressed.push(init);
    if (count > 1) {
        compressed.push(count.toString());
    }
    chars.unshift(...compressed.join("").split(""));
    return compressed.join("").split("").length;
};

let uncompressed = ["a","a","b","b","c","c","c"];
console.log(compress(uncompressed));