
function longestCommonSubstring(words: string[]) {
    
    if (words.length === 0) return "";
    let shortest = words.reduce((a, b) => a.length <= b.length ? a : b);
    console.log("🚀 ~ longestCommonSubstring ~ shortest:", shortest)
    for (let len = shortest.length; len > 0; len--) {
        console.log("🚀 ~ longestCommonSubstring ~ len:", len)
        for (let start = 0; start <= shortest.length - len; start++) {
            console.log("🚀 ~ longestCommonSubstring ~ start:", start)
            let substr = shortest.substring(start, start + len);
            console.log("🚀 ~ longestCommonSubstring ~ substr:", substr)
            if (words.every(word => word.includes(substr))) {
                return substr;
            }
        }
    }
    return "";
}


function cutCommonSubstring(words: string[]) {
   
    const common = longestCommonSubstring(words);
    if (!common) return words; // no common part found
    return words.map(word => word.replace(common, ""));
}

console.log("🚀 ~ longestCommonSubstring ~ longestCommonSubstring:", longestCommonSubstring(["BATHROOM", "BLOODBATH", "BATHTUB"]))
console.log("🚀 ~ cutCommonSubstring ~ cutCommonSubstring:", cutCommonSubstring(["BATHROOM", "BLOODBATH", "BATHTUB"]))
