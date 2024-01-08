function gcdStrings(str1, str2) {
    var result = "";
    var short = "";
    var mlen = Math.min(str1.length, str2.length);
    if (str1.length == mlen) {
        short = str1;
    }
    else {
        short = str2;
    }
    console.log("shorter string is: '" + short + "'");
    return (result);
}
gcdStrings("ag", "hello");
