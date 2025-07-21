"use strict";
/////// 1 ////////
function getFirstAndLast(arg) {
    return arg[0] + arg[arg.length - 1];
}
console.log("🚀 ~ getFirstAndLast ~ getFirstAndLast:", getFirstAndLast("EZKOBARARKOBES"));
/////// 2 ////////
function containWord(str, word) {
    if (str.includes(word)) {
        return true;
    }
    else
        return false;
}
console.log("🚀 ~ containWord ~ containWord:", containWord("Hello World", "World"));
console.log("🚀 ~ containWord ~ containWord:", containWord("Hello World", "Kabaw"));
/////// 3 ////////
function countChar(str, char) {
    let count = 0;
    for (let i = 0; i <= str.length; i++) {
        // let splitted = str.split("")
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}
console.log("🚀 ~ countChar ~ countChar:", countChar("THISISTHEMESSAGE", "I"));
/////// 4 ////////
function uppercaseSubstring(str, start, end) {
    let target = str.slice(start, end);
    let ending = str.slice(end);
    console.log(ending);
    return target.toUpperCase() + ending;
}
console.log("🚀 ~ uppercaseSubstring ~ uppercaseSubstring:", uppercaseSubstring("zolobolo", 0, 4));
/////// 5 ////////
function reverseString(str) {
    let ready = str.split("");
    let reversed = ready.reverse();
    let final = reversed.join("");
    return final;
}
console.log("🚀 ~ reverseString ~ reverseString:", reverseString("ABCDEFG"));
function maybeParseString(args) {
    if (typeof args === "string") {
        let parse = parseInt(args);
        if (Number.isNaN(parse) === true) {
            return undefined;
        }
        return parse;
    }
    if (typeof args === "undefined") {
        return undefined;
    }
    return;
}
console.log("🚀 ~ maybeParseString ~ maybeParseString:", maybeParseString('junk'));
console.log("🚀 ~ maybeParseString ~ maybeParseString:", maybeParseString(undefined));
console.log("🚀 ~ maybeParseString ~ maybeParseString:", maybeParseString('34'));
console.log("🚀 ~ maybeParseString ~ maybeParseString:", maybeParseString('20220222'));
//////// Remove most seen words from array ////////
function removeMostSeen(args) {
    let counts = {};
    // Step 1: Count occurrences
    // for (const word of ...) { ... }
    for (const word of args) {
        if (counts[word]) {
            counts[word]++;
        }
        else {
            counts[word] = 1;
        }
        console.log("🚀 ~ removeMostSeen ~ counts:", counts);
    }
    // Step 2: Find the max count
    // const maxCount = ...
    const maxCount = Math.max(...Object.values(counts));
    console.log("🚀 ~ removeMostSeen ~ maxCount:", maxCount);
    // Step 3: Find words with max count
    // const mostSeen = ...
    const mostSeen = Object.keys(counts).filter(word => counts[word] === maxCount);
    console.log("🚀 ~ removeMostSeen ~ mostSeen:", mostSeen);
    let finalResult = args.filter(word => !mostSeen.includes(word));
    console.log("🚀 ~ removeMostSeen ~ finalResult:", finalResult);
    // Step 4: Filter array
    // return ...
    return finalResult;
}
console.log("🚀 ~ removeMostSeen ~ removeMostSeen:", removeMostSeen(["a", "b", "a", "c", "a", "b"]));
//////// Count Apple from Array ////////
function countApple(str) {
    let count = 0;
    for (const fruit of str) {
        console.log("🚀 ~ countApple ~ fruit:", fruit);
        if (fruit === "apple") {
            count++;
        }
    }
    return count;
}
console.log("🚀 ~ countApple ~ countApple:", countApple(["apple", "apple", "apple", "apple", "applepie"]));
//////// Remove Apple from Array ////////
function removeApple(str) {
    let result = [];
    for (const notApple of str) {
        if (notApple !== "apple") {
            result.push(notApple);
        }
    }
    // Loop, check if not "apple", then push into result
    return result;
}
console.log("🚀 ~ removeApple ~ removeApple:", removeApple(["apple", "banana", "cherry", "apple", "applepie"]));
///////// Remove Duplicate /////////
function removeDuplicates(arr) {
    // your code here
    let result = [];
    for (const duplicate of arr) {
        if (!result.includes(duplicate)) {
            console.log("🚀 ~ removeDuplicates ~ result:", result);
            result.push(duplicate);
        }
    }
    return result;
}
console.log("🚀 ~ removeDuplicates ~ removeDuplicates:", removeDuplicates(["apple", "banana", "apple", "orange", "banana", "apple"]));
///////// Longest Word in Array /////////
function findLongestWords(words) {
    // your code here!
    let result = [];
    let lengths = words.map(long => long.length);
    console.log("🚀 ~ findLongestWords ~ lengths:", lengths);
    let max = Math.max(...lengths);
    console.log("🚀 ~ findLongestWords ~ max:", max);
    for (const longest of words) {
        console.log("🚀 ~ findLongestWords ~ i:", longest);
        if (longest.length === max) {
            result.push(longest);
        }
    }
    return result;
}
console.log("🚀 ~ findLongestWords ~ findLongestWords:", findLongestWords(["apple", "banana", "pear", "pineapple"]));
///////// First N in Array /////////
function getFirstN(str, n) {
    let result = str.slice(0, n);
    return result;
    // Return the first n characters
}
///////// Last N in Array /////////
function getLastN(str, n) {
    let result = str.slice(-n);
    return result;
    // Return the first n characters
}
/////// Start with ///////
function startsWith(str, prefix) {
    let result = str.startsWith(prefix);
    return result;
}
/////// End with ///////
function endsWith(str, suffix) {
    let result = str.endsWith(suffix);
    return result;
}
///////  Extract Substring Between Two Indexes ///////
function getBetween(str, start, end) {
    let result = str.slice(start, end);
    return result;
    // Return the substring from start to end
}
/////// Capitalize First Letter ////////
function capitalizeFirst(str) {
    if (str.length === 0)
        return "";
    return str[0].toUpperCase() + str.slice(1);
}
//////////// Replace all vowel with * ////////////
function vowelToStar(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        result.push(str[i].replace(/[aeiou]/gi, "*"));
    }
    return result;
}
