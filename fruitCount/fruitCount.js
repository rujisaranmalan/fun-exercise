"use strict";
function maxCountFruit(fruits) {
    // Count each fruit
    const mappingFruit = new Map();
    for (let fruit of fruits) {
        mappingFruit.set(fruit, (mappingFruit.get(fruit) || 0) + 1);
    }
    // 1. Print each fruit and its count
    console.log("---- Fruit counts ----");
    for (const [key, cnt] of mappingFruit) {
        console.log("Fruit:", key, "| Count:", cnt);
    }
    // 2. Find and print the max count
    let maxCount = Math.max(...mappingFruit.values());
    console.log("Value", mappingFruit.values());
    return maxCount;
}
console.log("---- Max fruit count ----");
console.log("Max count is:", maxCountFruit(["apple", "banana", "apple", "orange", "banana", "banana"]));
// for (const cnt of mappingFruit.values()) {
//   if (cnt > maxCount) maxCount = cnt;
//   console.log("🚀 ~ maxCount in loop:", maxCount)
// }
