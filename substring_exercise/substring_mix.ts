function maskDigits(str: string[]): string[] {
    const re = /[0-9]/g;
    return str.map((element) => element.replace(re, "#"))
    
}

console.log("🚀 ~ maskDigits ~ maskDigits:", maskDigits(["password123","1a2b3c","no digits"]))

function removeConsonant(str: string[]): string[]{
    
    const consonant = /[bcdfghjklmnpqrstvwxyz]/gi;
    return str.map((element) => element.replace(consonant, ""))
}   

console.log("🚀 ~ removeConsonant ~ removeConsonant:", removeConsonant(["abcdefg","Reading Time","Hello, World!"]))

function capitalizeEveryThird(str: string[]): string[]{

    return str.map(str => {
        let result = "";
        for (let i = 0; i < str.length; i++) {
            if (i % 3 === 2) {
                result += str[i].toUpperCase();
            } else {
                result += str[i];
            }
        }
        return result;
    });
    
}

console.log("🚀 ~ capitalizeEveryThird ~ capitalizeEveryThird:", capitalizeEveryThird(["abcdefghijk","hello world","a","ab","abcxyz"]))

///////////Write a function that, given an array of sentences, reverses every word longer than 4 characters.//////
function reverseLongWords(args: string[]): string[] {
    return args.map(sentence =>
        sentence
            .split(" ")
            .map(word => (word.length > 4 ? word.split("").reverse().join("") : word))
            .join(" ")
    );
}


console.log("🚀 ~ reverseLongWords ~ reverseLongWords:", reverseLongWords(["The quick brown fox jumps over the lazy dog"]))


//////////////// Write a function isCommonSubstring(words: string[], target: string): boolean
//////////////// that returns true if target appears in every string in words, otherwise returns false. //////////////////

function isCommonSubstring(words: string[], target: string): boolean {
    
    return words.every((element) => element.includes(target))
}

console.log("🚀 ~ isCommonSubstring ~ isCommonSubstring:", isCommonSubstring(["banana", "bandana", "cabana"], "ana"))
console.log(isCommonSubstring(["house", "mouse", "horse"], "ouse"));

// Write a function findShortestString(words: string[]): string
// that returns the shortest string from the array.

function findShortestString(words: string[]): string {
    let shortest = words.reduce((a, b) => a.length <= b.length ? a : b);
    return shortest 
}

console.log(findShortestString(["hi", "hello", "hey"]));     // "hi"
console.log(findShortestString(["dog", "cat", "bear"]));     // "dog"
console.log(findShortestString(["one", "two", "three"]));    // "one"
console.log(findShortestString(["apple"]));                  // "apple"

// Write a function getSubstrings(str: string, length: number): string[]
// that returns all possible substrings of the given length from the string.

function getSubstrings(str: string, length: number): string[] {
    let realResult = []
    for(let i = 0; i <= str.length - length; i++){
        let resulting = str.substring(i, i+length)
        realResult.push(resulting)
    }
    return realResult
}

console.log(getSubstrings("abcdef", 3)); // ["abc", "bcd", "cde", "def"]
console.log(getSubstrings("hello", 2));  // ["he", "el", "ll", "lo"]
console.log(getSubstrings("cat", 1));    // ["c", "a", "t"]
console.log(getSubstrings("wow", 5));    // []

// Write a function isSubstringOfAny(words: string[], target: string): boolean
// that returns true if target is a substring of at least one word.

function isSubstringOfAny(words: string[], target: string): boolean {
    return words.some(word => word.includes(target));
}

console.log(isSubstringOfAny(["banana", "apple", "orange"], "ana")); // true
console.log(isSubstringOfAny(["dog", "cat", "mouse"], "zoo"));       // false
console.log(isSubstringOfAny(["red", "blue", "green"], "e"));        // true

function identity<T>(value: T): T {
  // your code here
  return value
}

console.log(identity("bm"));                // "bm"
console.log(identity([true, false]));       // [true, false]
console.log(identity({ role: "admin" }));   // { role: "admin" }

function pluck<T, K extends keyof T>(obj: T, key: K): T[K] {
  // your code here
  return obj[key];
}

const user = { id: 101, name: "บีเอ็ม", isAdmin: true };

console.log(pluck(user, "id"));       // 101
console.log(pluck(user, "isAdmin"));  // true
console.log(pluck(user, "name"));     // "บีเอ็ม"



///////////////// Write a function
// afterChar(str: string, char: string): string
// that returns everything in str after the first occurrence of char. If char is not found, return an empty string.

function afterChar(str: string, char: string): string {
    
    let index:number = str.indexOf(char)
    let result:string = str.substring(index + 1)
    if(str.includes(char)){
        return result 
    }
    else return ""
    
}

console.log("🚀 ~ afterChar ~ afterChar:", afterChar("hello,world", ","))
console.log("🚀 ~ afterChar ~ afterChar:", afterChar("typescript", "s"))
console.log("🚀 ~ afterChar ~ afterChar:", afterChar("banana", "x"))

// Write a function
// countSub(str: string, sub: string): number
// that returns how many times sub appears in str.


function countSub(str: string, sub: string): number {
    
    let num: number = 0
    let pos: number = 0
    for(let i = 0; i < str.length; i++){
        while(true){
            let found = str.indexOf(sub,pos)
            if (found === -1) break;
            num++
            pos = found + 1
        }
    }
    return num
}

console.log("🚀 ~ countSub ~ countSub:", countSub("banana", "an"))
console.log("🚀 ~ countSub ~ countSub:", countSub("aaaaa", "aa"))
console.log("🚀 ~ countSub ~ countSub:", countSub("hello", "z"))

// Write a function
// replaceWord(str: string, target: string, replacement: string): string
// that replaces target only when it’s a full word (surrounded by spaces or at the start/end).

function replaceWord(str: string, target: string, replacement: string): string {
    const re = new RegExp(`\\b${target}\\b`, "g");
    return str.replace(re, replacement);
}


// Write a function
// uniqueSubstrings(str: string, length: number): string[]
// that returns all unique substrings of the given length.

function uniqueSubstrings(str: string, length: number): string[] {


    let result: string[] = []
    for (let i = 0; i <= str.length - length ; i++){
        let inside = str.substring(i, i+length)
        result.includes(inside)?  result : result.push(inside)
        
    }

    return result

}

console.log("🚀 ~ uniqueSubstrings ~ uniqueSubstrings:", uniqueSubstrings("ababc", 2))
console.log("🚀 ~ uniqueSubstrings ~ uniqueSubstrings:", uniqueSubstrings("aaaa", 2))

//// Upgrade Version ////

function uniqueSubstringsUpgraded(str: string, length: number): string[] {


    let resulted = new Set<string>()
    for (let i = 0; i <= str.length - length ; i++){
        let inside = str.substring(i, i+length)
        resulted.add(inside)
        
    }

    return Array.from(resulted)

}

console.log("🚀 ~ uniqueSubstringsUpgraded ~ uniqueSubstringsUpgraded:", uniqueSubstringsUpgraded("ababc", 2))
console.log("🚀 ~ uniqueSubstringsUpgraded ~ uniqueSubstringsUpgraded:", uniqueSubstringsUpgraded("aaaa", 2))


// Write a function
// reverseBetween(str: string, a: string, b: string): string
// that reverses the substring between the first occurrence of a and the first occurrence of b after that.

function reverseBetween(str: string, a: string, b: string): string {
    let posA = str.indexOf(a)
    let posB = str.indexOf(b, posA + 1)
    if (posA === -1 || posB === -1){
        return str
    }

    let before = str.slice(0, posA + 1)
    let toReverse = str.slice(posA + 1, posB)
    let after = str.slice(posB)
    return before + toReverse.split("").reverse().join("") + after

}

console.log(reverseBetween("xxAbcdefBxx", "A", "B")); // "xxABfedcxx"
console.log(reverseBetween("123startXYZend456", "t", "e")); // "123stratdneXYZend456"
console.log(reverseBetween("hello", "x", "y")); // "hello"


// Write a function
// removeAfterVowel(str: string): string
// that returns the string up to and including the first vowel (a, e, i, o, u, case-insensitive), removing everything after.

function removeAfterVowel(str: string): string {
    const re = /[aeiou]/i
    let result = str.search(re)
    if (result === -1){
        return str
    }
    console.log("🚀 ~ removeAfterVowel ~ result:", result)
    return str.slice(0, result + 1)

}

console.log(removeAfterVowel("friend"));   // "frie"
console.log(removeAfterVowel("Sky"));      // "Sky"
console.log(removeAfterVowel("banana"));   // "ba"

// Write a function
// longestPalindrome(str: string): string
// that returns the longest substring that reads the same forward and backward.

function longestPalindrome(str: string): string {
    if(str.length === 0){
        return ""
    }
    for(let len = str.length; len > 0; len--){
        for(let start = 0; start <= str.length - len; start++){
            let sub = str.substring(start,start + len)
            if (sub === sub.split('').reverse().join('')){
                return sub    
            }
        }
        
    }
    return ""
}

console.log(longestPalindrome("racecarxyz")); // "racecar"
console.log(longestPalindrome("banana"));     // "anana"
console.log(longestPalindrome("abcde"));      // "a"


function longestPalindromeUpgraded(strArr: string[]): string[] {
    if (strArr.length === 0) return [""];
    return strArr.map(s => longestPalindrome(s));
}

// Write a function
// betweenChars(str: string, start: string, end: string): string[]
// that returns all substrings that are found between every pair of start and end characters.

function betweenChars(str: string, start: string, end: string): string[] {
    let final: string[] = [];
    let pos = 0;

    while (true) {
        let initial = str.indexOf(start, pos);
        if (initial === -1) break;

        let ending = str.indexOf(end, initial + 1);
        if (ending === -1) break;

        final.push(str.slice(initial + 1, ending));
        pos = ending + 1;
    }

    return final;
}


console.log(betweenChars("aXbXcXdX", "X", "X")); // ["b", "c"]
console.log(betweenChars("start<first>end<second>end", "<", ">")); // ["first", "second"]
console.log(betweenChars("no brackets here", "[", "]")); // []



// Write a function
// replaceEveryN(str: string, n: number, replacement: string): string
// that replaces every N-th character in str with replacement.

function replaceEveryN(str: string, n: number, replacement: string): string {
    let result:string[] = []
    for(let i = 0; i <= str.length -1; i++){
        if((i + 1) % n === 0){
            result.push(replacement)
        }
        else {
            result.push(str[i])
        }
    }
    return result.join("")
}

console.log(replaceEveryN("abcdefgh", 3, "*")); // "ab*de*gh"
// positions: 2 (c), 5 (f) replaced

console.log(replaceEveryN("123456789", 2, "X")); // "1X3X5X7X9"
// positions: 1 (2), 3 (4), 5 (6), 7 (8) replaced

// Write a function
// isRepeatedSubstring(str: string): boolean
// that returns true if the string can be formed by repeating a substring pattern
// (e.g. "abab", "abcabcabc"), and false otherwise.

function isRepeatedSubstring(str: string): boolean {
    for (let len = 1; len <= str.length / 2; len++){
        if(str.length % len === 0){
            let candidate = str.slice(0, len)
            let repeated = candidate.repeat(len)

            if(repeated === str){
                return true
            }
        }
    }
    return false
}



console.log(isRepeatedSubstring("abab"));      // true
console.log(isRepeatedSubstring("abcabcabc")); // true
console.log(isRepeatedSubstring("abcdab"));    // false
console.log(isRepeatedSubstring("aaaa"));      // true
console.log(isRepeatedSubstring("a"));  

// Write a function
// removeOddDigit(str: string): string
// that removes all digits found at odd indices (1, 3, 5, ...; zero-based).

function removeOddDigit(str: string): string {
    let result:string[] = []
    for(let i = 0; i < str.length; i++){
        if(i % 2 !== 0){
            if(str[i] >= '0' && str[i] <= '9'){
                continue
            }
        }
        result.push(str[i])
    }
    return result.join("")
}

console.log("🚀 ~ removeOddDigit ~ result:", removeOddDigit("a1b2c3d4")); 
console.log("🚀 ~ removeOddDigit ~ result:", removeOddDigit("12345"));  
console.log("🚀 ~ removeOddDigit ~ result:", removeOddDigit("a9b8c7"));   


// Write a function
// findAllBetween(str: string, start: string, end: string): string[]
// that finds all substrings starting with start and ending with end (including overlapping).

function findAllBetween(str: string, start: string, end: string): string[] {
    if(str.length === 0){
        return []
    }
    let result: string[] = []
    for(let len = 0; len < str.length - 1; len++){
        if(str[len] === start){
            for(let init = len + 1; init <= str.length - 1; init++){
                if(str[init] === end){
                    result.push(str.slice(len,init+1))
                }
        }
        }
    }
    return result
}

console.log(findAllBetween("abcXdefXghi", "X", "X")); // ["XdefX"]
console.log(findAllBetween("abaabbbaaa", "a", "b"));  // ["aab", "ab", "aabb", "abb"]

// Write a function:
// substringFrequencies(str: string, length: number): Record<string, number>
// that returns an object (or Map) with all unique substrings of the given length as keys and how many times each appears as values.

function substringFrequencies(str: string, length: number): Record<string, number> {

    let result: Record<string, number> = {}

    for(let i = 0; i <= str.length - length; i++){
        let sub = str.slice(i, i + length)
        if (result[sub]) {
            result[sub] += 1;
        } 
        else {
            result[sub] = 1;
        }
    }
    return result
}

console.log("🚀 ~ substringFrequencies ~ result:", substringFrequencies("banana", 2))
// Output: { "ba": 1, "an": 2, "na": 2 }

// Write a function:
// longestWord(sentence: string): string
// that returns the longest word (substring separated by spaces) in the sentence.

function longestWord(sentence: string): string {
    let splitted = sentence.split(" ")
    let answer = splitted.reduce((a, b) => a.length >= b.length ? a : b)
    return answer
}

console.log("🚀 ~ longestWord ~ result:", longestWord("The quick brown fox")); // "quick" or "brown"
console.log("🚀 ~ longestWord ~ result:", longestWord("a ab abc abcd")); // "abcd"

// Write a function
// mostFrequentChar(str: string): string
// that returns the character which appears the most in the string.
// If there’s a tie, return any one.

function mostFrequentChar(str: string): string {
    let count = new Map()
    let maxChar = ""
    let maxCount = 0
    
    for(let i = 0; i < str.length; i++){
        let chars = str[i]
        if(count.has(chars)){
            count.set(chars,count.get(chars)! + 1)
        }
        else{
            count.set(chars, 1)
        }
        
    }
    console.log("🚀 ~ mostFrequentChar ~ count:", count)

    for (let [char, freq] of count.entries()) {
    // update your max if freq > current max
        if(freq > maxCount){
            maxChar = char
            maxCount = freq
        }
        
    } 
    return maxChar
}

console.log("🚀 ~ mostFrequentChar ~ result:", mostFrequentChar("banana")); // "a" or "n"
console.log("🚀 ~ mostFrequentChar ~ result:", mostFrequentChar("mississippi")); // "i" or "s"
console.log("🚀 ~ mostFrequentChar ~ result:", mostFrequentChar("abcde")); // any char


// Write a function:
// removeConsecutiveDuplicates(str: string): string
// that returns the string with all consecutive duplicate characters reduced to one.

function removeConsecutiveDuplicates(str: string): string {
    let result: string[] = []
    for(let i = 0; i < str.length; i++){
        if((str[i] !== str[i+1])){
            result.push(str[i])
        }
        else{
            continue
        }
    }
    return result.join("")
}

console.log("🚀 ~ removeConsecutiveDuplicates ~ result:", removeConsecutiveDuplicates("aabbccdd")); // "abcd"
console.log("🚀 ~ removeConsecutiveDuplicates ~ result:", removeConsecutiveDuplicates("mississippi")); // "misisipi"
console.log("🚀 ~ removeConsecutiveDuplicates ~ result:", removeConsecutiveDuplicates("aaaa")); // "a"

// Write a function:
// runLengthEncode(str: string): string
// that replaces runs of the same character with the character followed by the count.

function runLengthEncode(str: string): string {
    let result = []
    let trackCount: number = 1

    for(let i = 0; i < str.length; i++){
        if(str[i] === str[i+1]){
            trackCount++
            console.log("🚀 ~ runLengthEncode ~ trackCount:", trackCount)
            continue
        }
        else{
            
            result.push(str[i])
            result.push(trackCount)
            trackCount = 1
        }
    }

    return result.join("")
}

console.log("🚀 ~ runLengthEncode ~ result:", runLengthEncode("aabbccdd")); // "a2b2c2d2"
console.log("🚀 ~ runLengthEncode ~ result:", runLengthEncode("mississippi")); // "m1i1s2i1s1i2p2i1"
console.log("🚀 ~ runLengthEncode ~ result:", runLengthEncode("aaaa")); // "a4"
console.log("🚀 ~ runLengthEncode ~ result:", runLengthEncode("abc")); // "a1b1c1"

// Write a function:
// runLengthDecode(str: string): string
// that decodes a string in the run-length encoding format back to its original form.

function runLengthDecode(str: string): string {
    let result = []
    let trackChar = ""
    let numStr = ""
    for(let i = 0; i < str.length; i++){
        if (isNaN(Number(str[i]))) {
            if (numStr !== "") {
            // process previous run
                let count = parseInt(numStr);
                for (let j = 0; j < count; j++) {
                    result.push(trackChar);
                }
            }
            trackChar = str[i];
            numStr = "";
        }
        else {
            numStr += str[i];
        }   
    }
    let proc = parseInt(numStr)

    for(let j = 0;j < proc; j++){
        result.push(trackChar)
    }

    return result.join("")
}

console.log("🚀 ~ runLengthDecode ~ result:", runLengthDecode("a2b2c2d2"));   // "aabbccdd"
console.log("🚀 ~ runLengthDecode ~ result:", runLengthDecode("a4"));         // "aaaa"
console.log("🚀 ~ runLengthDecode ~ result:", runLengthDecode("a1b1c1"));     // "abc"


// Write a function:
// firstNonRepeatingChar(str: string): string | null
// Return the first character in the string that appears only once.
// If all repeat, return null.

function firstNonRepeatingChar(str: string): string | null {
    const mapping = new Map()
    let nonRepeating:string = ""

    for(let i = 0; i < str.length; i++){
        let char = str[i]
        if(mapping.has(char)){
            mapping.set(char,mapping.get(char)! + 1)
        }
        else{
            mapping.set(char,1)
        }
    }

    for (let [chars, freq] of mapping.entries()) {
    // update your max if freq > current max
        if(freq === 1){
            nonRepeating = chars
            return chars
        }
        
    }
    return null

}

console.log("🚀 ~ firstNonRepeatingChar ~ result:", firstNonRepeatingChar("aabbccde")); // "d"
console.log("🚀 ~ firstNonRepeatingChar ~ result:", firstNonRepeatingChar("aabbcc"));   // null
console.log("🚀 ~ firstNonRepeatingChar ~ result:", firstNonRepeatingChar("abcab"));    // "c"


// Write a function:
// countPalindromicSubstrings(str: string): number
// that returns the count of all palindromic substrings (substrings that read the same forward and backward, length ≥ 1).

function countPalindromicSubstrings(str: string): number {
    let count = 0;
    for (let start = 0; start < str.length; start++) {
        for (let end = start; end < str.length; end++) {
            let substr = str.slice(start, end + 1);
            // Check if substr is a palindrome
            // If so, count++
            if(substr === substr.split('').reverse().join('')){
                count++
            }
        }
    }
    return count;
}

console.log("🚀 ~ countPalindromicSubstrings ~ result:", countPalindromicSubstrings("aaa"));    // 6
console.log("🚀 ~ countPalindromicSubstrings ~ result:", countPalindromicSubstrings("abc"));    // 3
console.log("🚀 ~ countPalindromicSubstrings ~ result:", countPalindromicSubstrings("racecar"));// 10

// Write a function:
// groupAnagrams(words: string[]): string[][]
// that groups words that are anagrams of each other into subarrays.

function groupAnagrams(words: string[]): string[][] {
    let mapped = new Map<string, string[]>()
    
    for (let word of words) {
        let sorted = word.split('').sort().join('');
        // If already there, push to array. Else, start new array
        if (!mapped.has(sorted)) {
            mapped.set(sorted, []);
        }
        mapped.get(sorted)!.push(word);
    }
    // Convert map values to array of arrays
    return Array.from(mapped.values());
}

console.log("🚀 ~ groupAnagrams ~ result:", groupAnagrams(["eat","tea","tan","ate","nat","bat"]));

function groupByFirstLetter(words: string[]) {
    // Your code here!
    let trace = new Map()
    for(let word of words){
        
        let toLower = word.toLowerCase()
        let firstLetter = toLower[0]
        if(!trace.has(firstLetter)) {
            trace.set(firstLetter,[])
        }
        trace.get(firstLetter)!.push(word)
    }
    return Array.from(trace.values())
 
}
console.log(groupByFirstLetter(["Apple", "avocado", "Banana", "blueberry", "Cherry", "cantaloupe", "apricot"]));

function groupByLastLetter(words: string[]): string[][] {
    // Your code here!
    let trace = new Map()
    for(let word of words){
        
        let toLower = word.toLowerCase()
        let lastLetter = toLower[word.length - 1]
        if(!trace.has(lastLetter)) {
            trace.set(lastLetter,[])
        }
        trace.get(lastLetter)!.push(word)
    }
    return Array.from(trace.values())
}
console.log(groupByLastLetter(["Apple", "pie", "crumble", "banana", "cake", "lake", "avocado"]));

