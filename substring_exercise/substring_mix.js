"use strict";
function maskDigits(str) {
    const re = /[0-9]/g;
    return str.map((element) => element.replace(re, "#"));
}
console.log("🚀 ~ maskDigits ~ maskDigits:", maskDigits(["password123", "1a2b3c", "no digits"]));
function removeConsonant(str) {
    const consonant = /[bcdfghjklmnpqrstvwxyz]/gi;
    return str.map((element) => element.replace(consonant, ""));
}
console.log("🚀 ~ removeConsonant ~ removeConsonant:", removeConsonant(["abcdefg", "Reading Time", "Hello, World!"]));
function capitalizeEveryThird(str) {
    return str.map(str => {
        let result = "";
        for (let i = 0; i < str.length; i++) {
            if (i % 3 === 2) {
                result += str[i].toUpperCase();
            }
            else {
                result += str[i];
            }
        }
        return result;
    });
}
console.log("🚀 ~ capitalizeEveryThird ~ capitalizeEveryThird:", capitalizeEveryThird(["abcdefghijk", "hello world", "a", "ab", "abcxyz"]));
///////////Write a function that, given an array of sentences, reverses every word longer than 4 characters.//////
function reverseLongWords(args) {
    return args.map(sentence => sentence
        .split(" ")
        .map(word => (word.length > 4 ? word.split("").reverse().join("") : word))
        .join(" "));
}
console.log("🚀 ~ reverseLongWords ~ reverseLongWords:", reverseLongWords(["The quick brown fox jumps over the lazy dog"]));
//////////////// Write a function isCommonSubstring(words: string[], target: string): boolean
//////////////// that returns true if target appears in every string in words, otherwise returns false. //////////////////
function isCommonSubstring(words, target) {
    return words.every((element) => element.includes(target));
}
console.log("🚀 ~ isCommonSubstring ~ isCommonSubstring:", isCommonSubstring(["banana", "bandana", "cabana"], "ana"));
console.log(isCommonSubstring(["house", "mouse", "horse"], "ouse"));
// Write a function findShortestString(words: string[]): string
// that returns the shortest string from the array.
function findShortestString(words) {
    let shortest = words.reduce((a, b) => a.length <= b.length ? a : b);
    return shortest;
}
console.log(findShortestString(["hi", "hello", "hey"])); // "hi"
console.log(findShortestString(["dog", "cat", "bear"])); // "dog"
console.log(findShortestString(["one", "two", "three"])); // "one"
console.log(findShortestString(["apple"])); // "apple"
// Write a function getSubstrings(str: string, length: number): string[]
// that returns all possible substrings of the given length from the string.
function getSubstrings(str, length) {
    let realResult = [];
    for (let i = 0; i < str.length - length; i++) {
        let resulting = str.substring(i, i + length);
        realResult.push(resulting);
    }
    return realResult;
}
console.log(getSubstrings("abcdef", 3)); // ["abc", "bcd", "cde", "def"]
console.log(getSubstrings("hello", 2)); // ["he", "el", "ll", "lo"]
console.log(getSubstrings("cat", 1)); // ["c", "a", "t"]
console.log(getSubstrings("wow", 5)); // []
// Write a function isSubstringOfAny(words: string[], target: string): boolean
// that returns true if target is a substring of at least one word.
function isSubstringOfAny(words, target) {
    return words.some(word => word.includes(target));
}
console.log(isSubstringOfAny(["banana", "apple", "orange"], "ana")); // true
console.log(isSubstringOfAny(["dog", "cat", "mouse"], "zoo")); // false
console.log(isSubstringOfAny(["red", "blue", "green"], "e")); // true
