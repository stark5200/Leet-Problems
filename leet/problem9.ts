function compress(chars: string[]): number {
    let init = chars[0]; 
    let count = 0;
    let compressed: string[] = [];
    for (let char in chars) {
        console.log(char);
        if (char == init) {
            count++;
        } else { (compressed.push(init), compressed.push(count.toString()) , init = char , count = 1) };
        console.log(count.toString() + init + count);
    }
    console.log(compressed)
    return compressed.length;
};

let uncompressed = ["a","a","b","b","c","c","c"];
console.log(compress(uncompressed));