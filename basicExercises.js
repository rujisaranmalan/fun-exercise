"use strict";
function personalInfo(namesAndAges) {
    return namesAndAges[0] + " is " + namesAndAges[1] + " years old";
}
console.log(personalInfo(["Bobby", 17]));
function doubleValues(arr) {
    let result = [];
    let double = arr.map((a) => a * 2);
    result.push(double);
    return double;
}
console.log(doubleValues([1, 2, 3, 4])); // [2, 4, 6, 8]
function onlyEvens(arr) {
    let evens = arr.filter((n) => n % 2 === 0);
    return evens;
}
console.log(onlyEvens([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
function findLongestName(names) {
    // 1. Use reduce to track the longest name so far
    let result = [];
    if (names.length === 0) {
        return undefined;
    }
    let longest = names.reduce((a, b) => a.length >= b.length ? a : b);
    result.push(longest);
    return result.join("");
    // 2. Turbo log: candidate and its length
    // 3. Return the longest name at the end (or undefined if array is empty)
}
console.log(findLongestName(['Jim', 'Anna', 'Beatrice', 'Tom'])); // "Beatrice"
function cutCommonSubstringWithPlaceholder(words) {
    if (words.length === 0) {
        return [];
    }
    let shortest = words.reduce((a, b) => a.length <= b.length ? a : b);
    for (let len = shortest.length; len > 0; len--) {
        for (let start = 0; start <= shortest.length - len; start++) {
            let substr = shortest.substring(start, start + len);
            if (words.every(word => word.includes(substr))) {
                return words.map((word) => word.replace(substr, "___"));
            }
        }
    }
    return [];
}
console.log("🚀 ~ cutCommonSubstringWithPlaceholder ~ cutCommonSubstringWithPlaceholder:", cutCommonSubstringWithPlaceholder(["BATHROOM", "BLOODBATH", "BATHTUB"]));
function mostCommonField(arr, field) {
    // turbo logs + your logic
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        const value = arr[i][field];
        console.log("🚀 ~ mostCommonField ~ value:", value);
        if (!map.has(value)) {
            map.set(value, 1);
        }
        else {
            map.set(value, map.get(value) + 1);
        }
    }
    console.log("🚀 ~ mostCommonField ~ map:", map);
    let maxCount = 0;
    let winner = undefined;
    for (const [key, cnt] of map) {
        if (cnt > maxCount) {
            maxCount = cnt;
            winner = key;
        }
    }
    return winner;
}
const data = [
    { user: "Alice", role: "admin" },
    { user: "Bob", role: "user" },
    { user: "Charlie", role: "admin" },
];
console.log(mostCommonField(data, "role")); // "admin"
