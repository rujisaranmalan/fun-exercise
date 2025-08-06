class MiniLRU {
    private cache: Map<string, true>;
  constructor(private size: number) {
    // your code here
    this.size = size
    this.cache = new Map<string, true>()

  }

  get(key: string): boolean {
    // ...
    if(!this.cache.has(key)){
        return false
    }
    this.cache.delete(key);
    this.cache.set(key, true);
    return true;
  }

  put(key: string): void {
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

function orderBy<T>(arr: T[], field: keyof T): T[] {
  // your code here
  if(arr === null){
    return []
  }
  let copy = [...arr]
  console.log(copy)
  let result = copy.sort((a, b) => {
  const valA = a[field];
  const valB = b[field];
  if (typeof valA === 'string' && typeof valB === 'string') {
    return valA.localeCompare(valB);
  }
  return (valA as number) - (valB as number);
    })

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

function flattenOneLevel(obj: Record<string, any>): Record<string, any> {
  const result: Record<string, any> = {};

  for (const key in obj) {
    const value = obj[key];
    if (
      typeof value === "object" &&
      value !== null &&
      !Array.isArray(value)
    ) {
      for (const subKey in value) {
        result[subKey] = value[subKey];
      }
    } else {
      result[key] = value;
    }
  }

  return result;
}


function uniqueSortedUnion(arr1: number[], arr2: number[]): number[]{
    
    const combined = [...arr1, ...arr2];
    let result = new Set(combined)
    let final = [...result].sort((a, b) => a - b);
    return final
    
    
}
console.log(uniqueSortedUnion([3,1,2,2], [5,3,4]));
// Output: [1,2,3,4,5]


function chunkArray<T>(arr: T[], size: number): T[][]{
  
  let result = []
  let copied = [...arr]

  for(let i = 0; i < copied.length; i+= size){
    let chunking = copied.slice(i, i + size)
    console.log("🚀 ~ chunkArray ~ chunking:", chunking)
    result.push(chunking)
  }

  return result
}

console.log("🚀 ~ chunkArray ~ chunkArray:", chunkArray([1,2,3,4,5], 2))

function deepCountKeys(obj: Record<string, unknown>): number {
  let count = 0

  for (const key of Object.keys(obj)) {
    count++;
    const value = obj[key];
    if (
      typeof value === 'object' &&
      value !== null &&
      !Array.isArray(value)
    ) {
      count += deepCountKeys(value as Record<string, unknown>);
    }
  }

  return count 
}

console.log("🚀 ~ deepCountKeys ~ deepCountKeys:", deepCountKeys({ a: 1, b: { x: 2, y: { z: 3 } } }))

function allIndices<T>(arr: T[], value: T): number[] {
  let copy = [...arr]
  let result: number[] = [];

  for(let i = 0; i < copy.length; i++){
    if(copy[i] === value){
      result.push(i)
    }

  }
  console.log('🚀 ~ allIndices ~ arr:', copy);
  console.log('🚀 ~ allIndices ~ value:', value);

  // Step: loop with index

  return result;
}

console.log("🚀 ~ allIndices:", allIndices([1,2,1,3,1], 1)); // [0,2,4]


function arrayIntersection<T>(a: T[], b: T[]): T[] {
  // turbo logs + your logic
  let result: T[] = []
  
  for(let i = 0; i < a.length; i++){
    if(b.includes(a[i])){
      result.push(a[i])
    }
  }

  let set = new Set(result)
  console.log("🚀 ~ arrayIntersection ~ set:", set)

  return Array.from(set)
}

console.log("🚀 ~ arrayIntersection:", arrayIntersection([1,2,3,4], [2,4,6])); // [2,4]

function mostFrequent<T>(arr: T[]): T | undefined {
  let freq = new Map<T, number>();
  // Turbo log: input
  console.log("🚀 ~ mostFrequent ~ arr:", arr);

  // Build frequency map
  for (let i = 0; i < arr.length; i++) {
    // turbo log: value and freq before
    let curr = freq.get(arr[i]) || 0;
    freq.set(arr[i], curr + 1);
    console.log("🚀 ~ freq update:", arr[i], "=>", freq.get(arr[i]));
  }

  // Find most frequent
  let maxCount = 0;
  let most: T | undefined = undefined;
  for (let [value, cnt] of freq) {
    console.log("🚀 ~ checking:", value, "count:", cnt);
    if (cnt > maxCount) {
      maxCount = cnt;
      most = value;
      console.log("🚀 ~ new most frequent:", most, "with count:", maxCount);
    }
  }

  // Turbo log: final result
  console.log("🚀 ~ mostFrequent ~ final result:", most);
  return most;
}


console.log("🚀 ~ mostFrequent:", mostFrequent([1,2,2,3,3,3,4,4,4,4,5,5]));
// 4
console.log("🚀 ~ mostFrequent:", mostFrequent(['a','b','a','c','a','b','b','b']));
// 'b'


function maxInWindow(arr: number[], k: number): number[] {
  let result: number[] = [];
  console.log('🚀 ~ maxInWindow ~ arr:', arr, 'k:', k);

  for (let i = 0; i <= arr.length - k; i++) {
    let window = arr.slice(i, i + k);
    console.log('🚀 ~ maxInWindow ~ window:', window);

    // Step: find max in window (hint: Math.max(...window))
    let max = Math.max(...window)
    result.push(max)
    // Turbo log: max value in current window
    // Push max to result
  }

  console.log('🚀 ~ maxInWindow ~ result:', result);
  return result;
}

console.log("🚀 ~ maxInWindow:", maxInWindow([1,3,2,5,2,6], 3)); // [3,5,5,6]

function mergeIntervals(intervals: [number, number][]): [number, number][] {
  // 1. Turbo log: input intervals
  // 2. Sort intervals by start
  let result: [number, number][] = []
  
  let sorting = intervals.sort((a, b) => a[0] - b[0]);
  console.log("🚀 ~ mergeIntervals ~ sorting:", sorting)
  // 3. Create result array, start with first interval
  // 4. Loop through each interval:
  // If current interval overlaps last in result, merge (update end)
  // Else, push current interval to result
  // Turbo log: result after each merge/push
  for(let i = 0; i < sorting.length; i++){
    if(result.length === 0){
      result.push(sorting[i])
    }
    else {
      let last = result[result.length - 1];
    // Check if current start <= last end
      if(sorting[i][0] <= last[1]) {
      // Merge: update last's end
      last[1] = Math.max(last[1], sorting[i][1])
      // Turbo log: "merging", last, "with", sorting[i]
      } 
      else {
      // Push new interval
      result.push(sorting[i]);
      // Turbo log: "no overlap, push", sorting[i]
      }
    }
  }
  console.log("🚀 ~ mergeIntervals ~ result:", result)
  // 5. Return result
  return result
}


const intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [9, 12],
  [15, 18]
];
console.log("🚀 ~ mergeIntervals:", mergeIntervals(intervals));
// [[1,6],[8,12],[15,18]]



