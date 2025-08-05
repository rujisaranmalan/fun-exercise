"use strict";
class MiniLRU {
    constructor(size) {
        this.size = size;
        // your code here
        this.size = size;
        this.cache = new Map();
    }
    get(key) {
        // ...
        if (!this.cache.has(key)) {
            return false;
        }
        this.cache.delete(key);
        this.cache.set(key, true);
        return true;
    }
    put(key) {
        // If key exists, remove it (so we can re-insert as most recent)
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }
        // If cache is full, remove the oldest key
        else if (this.cache.size >= this.size) {
            const oldestKey = this.cache.keys().next().value;
            this.cache.delete(oldestKey);
        }
        // Insert as most recent
        this.cache.set(key, true);
    }
}
const cache = new MiniLRU(2);
cache.put('a');
cache.put('b');
console.log(cache.get('a')); // true
cache.put('c'); // should evict 'b'
console.log(cache.get('b')); // false
console.log(cache.get('c')); // true
///////// Write a function orderBy<T>(arr: T[], field: keyof T): T[] that returns a new array, sorted by the given field (ascending). //////////
function orderBy(arr, field) {
    // your code here
    if (arr === null) {
        return [];
    }
    let copy = [...arr];
    console.log(copy);
    let result = copy.sort((a, b) => {
        const valA = a[field];
        const valB = b[field];
        if (typeof valA === 'string' && typeof valB === 'string') {
            return valA.localeCompare(valB);
        }
        return valA - valB;
    });
    return result;
}
const users = [
    { name: 'Xeno', age: 30 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie', age: 25 }
];
console.log(orderBy(users, 'age'));
console.log(orderBy(users, 'name'));
// Write a function flattenOneLevel(obj: Record<string, any>): Record<string, any> that takes an object, 
// and if any value is itself an object, moves its key-value pairs to the top level (shallow flatten only).
function flattenOneLevel(obj) {
    const result = {};
    for (const key in obj) {
        const value = obj[key];
        if (typeof value === "object" &&
            value !== null &&
            !Array.isArray(value)) {
            for (const subKey in value) {
                result[subKey] = value[subKey];
            }
        }
        else {
            result[key] = value;
        }
    }
    return result;
}
function uniqueSortedUnion(arr1, arr2) {
    const combined = [...arr1, ...arr2];
    let result = new Set(combined);
    let final = [...result].sort((a, b) => a - b);
    return final;
}
console.log(uniqueSortedUnion([3, 1, 2, 2], [5, 3, 4]));
// Output: [1,2,3,4,5]
function chunkArray(arr, size) {
    let result = [];
    let copied = [...arr];
    for (let i = 0; i < copied.length; i += size) {
        let chunking = copied.slice(i, i + size);
        console.log("🚀 ~ chunkArray ~ chunking:", chunking);
        result.push(chunking);
    }
    return result;
}
console.log("🚀 ~ chunkArray ~ chunkArray:", chunkArray([1, 2, 3, 4, 5], 2));
