/////// 1 ////////
function getFirstAndLast(arg: string) {
    return arg[0] + arg[arg.length -1]
}

console.log("🚀 ~ getFirstAndLast ~ getFirstAndLast:", getFirstAndLast("EZKOBARARKOBES"))

/////// 2 ////////
function containWord(str: string, word: string): boolean {
    
    if(str.includes(word)){
        return true
    }
    else return false
}

console.log("🚀 ~ containWord ~ containWord:", containWord("Hello World", "World"))
console.log("🚀 ~ containWord ~ containWord:", containWord("Hello World", "Kabaw"))

/////// 3 ////////
function countChar(str: string, char: string): number {

    let count = 0
    for(let i = 0; i <= str.length; i++){
        // let splitted = str.split("")
        if(str[i] === char){
            count++
        }
    }
    return count


}
console.log("🚀 ~ countChar ~ countChar:", countChar("THISISTHEMESSAGE", "I"))

/////// 4 ////////
function uppercaseSubstring(str: string, start: number, end: number): string {

    let target = str.slice(start, end)
    let ending = str.slice(end)
    
    console.log(ending)
    return target.toUpperCase() + ending

}
console.log("🚀 ~ uppercaseSubstring ~ uppercaseSubstring:", uppercaseSubstring("zolobolo", 0 , 4))

/////// 5 ////////
function reverseString(str: string): string {
    
    let ready = str.split("")
    let reversed = ready.reverse()
    let final = reversed.join("")
    return final

}
console.log("🚀 ~ reverseString ~ reverseString:", reverseString("ABCDEFG"))

//////// Write a function that turns a string | undefined into a number.

// If the argument was undefined, the function should return undefined.
// If the argument was a string containing a valid number, it should return that number.
// If the argument was a string without a number, it should return undefined.
// (You'll want to use the built-in functions parseInt(s: string) and Number.isNaN(n: number).) //////////

type S = string | undefined
function maybeParseString(args: S): number | undefined { 
  
  if(typeof args === "string"){
    let parse = parseInt(args)
    if(Number.isNaN(parse) === true){
      return undefined
    }
    return parse
  }

  if(typeof args === "undefined"){
    return undefined
  }

  return 
}

console.log("🚀 ~ maybeParseString ~ maybeParseString:", maybeParseString('junk'))
console.log("🚀 ~ maybeParseString ~ maybeParseString:", maybeParseString(undefined))
console.log("🚀 ~ maybeParseString ~ maybeParseString:", maybeParseString('34'))
console.log("🚀 ~ maybeParseString ~ maybeParseString:", maybeParseString('20220222'))

//////// Remove most seen words from array ////////

function removeMostSeen(args: string[]): string[] {
    let counts: {[key: string]: number} = {};

    // Step 1: Count occurrences
    // for (const word of ...) { ... }
    for (const word of args) {
    if (counts[word]) {
        counts[word]++;
    } else {
        counts[word] = 1;
        
    }
    console.log("🚀 ~ removeMostSeen ~ counts:", counts)
    }

    // Step 2: Find the max count
    // const maxCount = ...
    const maxCount = Math.max(...Object.values(counts));
    console.log("🚀 ~ removeMostSeen ~ maxCount:", maxCount)


    // Step 3: Find words with max count
    // const mostSeen = ...
    const mostSeen = Object.keys(counts).filter(word => counts[word] === maxCount);
    console.log("🚀 ~ removeMostSeen ~ mostSeen:", mostSeen)

    let finalResult = args.filter(word => !mostSeen.includes(word));
    console.log("🚀 ~ removeMostSeen ~ finalResult:", finalResult)


    // Step 4: Filter array
    // return ...
    return finalResult

}


console.log("🚀 ~ removeMostSeen ~ removeMostSeen:", removeMostSeen(["a", "b", "a", "c", "a", "b"]))

//////// Count Apple from Array ////////

function countApple(str: string[]): number {
  
  let count = 0
  for (const fruit of str){
    console.log("🚀 ~ countApple ~ fruit:", fruit)
    if(fruit === "apple"){
      count++
    }
  }
  return count
}
  

console.log("🚀 ~ countApple ~ countApple:", countApple(["apple","apple","apple","apple","applepie"]))

//////// Remove Apple from Array ////////

function removeApple(str: string[]): string[] {
    let result = [];
    for (const notApple of str){
      if(notApple !== "apple"){
        result.push(notApple)
      }
    }
    // Loop, check if not "apple", then push into result
    return result;
}

console.log("🚀 ~ removeApple ~ removeApple:", removeApple(["apple","banana","cherry","apple","applepie"]))

///////// Remove Duplicate /////////
function removeDuplicates(arr: string[]): string[] {
    // your code here
  let result = [];
  for (const duplicate of arr){
    if(!result.includes(duplicate)){
      console.log("🚀 ~ removeDuplicates ~ result:", result)
      result.push(duplicate)
    }
  }
    
  return result
}

console.log("🚀 ~ removeDuplicates ~ removeDuplicates:", removeDuplicates(["apple", "banana", "apple", "orange", "banana", "apple"]))

///////// Longest Word in Array /////////

function findLongestWords(words: string[]): string[] {
    
    // your code here!
    let result = [];
    let lengths = words.map(long => long.length)
    console.log("🚀 ~ findLongestWords ~ lengths:", lengths)
    let max = Math.max(...lengths)
    console.log("🚀 ~ findLongestWords ~ max:", max)


    for (const longest of words){
      console.log("🚀 ~ findLongestWords ~ i:", longest)
      if(longest.length === max){
        result.push(longest)
      }
    }
  return result
    
}
    

console.log("🚀 ~ findLongestWords ~ findLongestWords:", findLongestWords(["apple", "banana", "pear", "pineapple"]))

///////// First N in Array /////////
function getFirstN(str: string, n: number): string {
  let result = str.slice(0, n)
  return result
    // Return the first n characters
}

///////// Last N in Array /////////
function getLastN(str: string, n: number): string {
  let result = str.slice(-n)
  return result
    // Return the first n characters
}

/////// Start with ///////
function startsWith(str: string, prefix: string): boolean {
  let result = str.startsWith(prefix)
  return result
}

/////// End with ///////
function endsWith(str: string, suffix: string): boolean {
  let result = str.endsWith(suffix)
  return result
}

///////  Extract Substring Between Two Indexes ///////
function getBetween(str: string, start: number, end: number): string {
  let result = str.slice(start, end)
  return result
    // Return the substring from start to end
}

/////// Capitalize First Letter ////////
function capitalizeFirst(str: string): string {
  if (str.length === 0) return "";
  return str[0].toUpperCase() + str.slice(1);
}

//////////// Replace all vowel with * ////////////

function vowelToStar(str: string): string[]{
  let result = []
  for(let i = 0; i < str.length; i++){
    result.push(str[i].replace(/[aeiou]/gi, "*"))
  }
  return result
}



