function doubleValue (arr: number[]){
    
    return arr.map(value => value * 2)
}

console.log("🚀 ~ doubleValue ~ doubleValue:", doubleValue([3,4,5,6]))

/////Get all words longer than 3 letters.

function findMoreThan3 (arr: string[]){
    return arr.filter(x => x.length > 3)
}

console.log("🚀 ~ findMoreThan3 ~ findMoreThan3:", findMoreThan3(["banana", "cher", "ok"]))

/////Find the first word that contains "oo"..

function findFirstContainOO (arr: string[]){
    
    return arr.find(x => x.substring(1,3) === "oo")
}

console.log("🚀 ~ findFirstContainOO ~ findFirstContainOO:", findFirstContainOO(["book", "cher", "took"]))

/////Group word by their first letter//////

function groupByFirstLetter(arr: string[]): {[key: string]: string[]} {
    return arr.reduce((groups, word) => {
        // figure out the key (first letter)
        // if key exists, push word; else, create array
        return groups;
    }, {} as {[key: string]: string[]});
}

////////////////////////////////////////

type ConversionSucceeded = {
  kind: 'success'
  value: number | string | undefined
};

type ConversionFailed = {
  kind: 'failure'
  reason: string
};

type Conversion =
  ConversionSucceeded | ConversionFailed;

function elemAt<T>(args: Array<T>, num: number): Conversion {

    if (args.length === 0) {
        return { kind: 'failure', reason: 'array is empty' };
    }
    if (num < 0 || num >= args.length) {
        return { kind: 'failure', reason: 'no element at that index' };
    }

    const val = args[num];

    if (typeof val === 'string' || typeof val === 'number') {
        return { kind: 'success', value: val };
    }

    if (typeof val === 'undefined') {
        return { kind: 'success', value: undefined };
    }

    
    else {return { kind: 'failure', reason: 'element is not a number or string' }}
}

/////////////////////////////////////////
type sqrtSucceeded = {
  kind: 'success'
  value: number | undefined
};

type sqrtFailed = {
  kind: 'failure'
};

type checkSqrt = sqrtSucceeded | sqrtFailed

function safeSqrt(n: number): checkSqrt {
    if(n < 0){
        return {kind: 'failure'}
    }
    if(n === 0){
        return {kind: 'success', value: 0}
    }
  return n ? {kind: 'success', value: Math.sqrt(n)} : {kind: 'failure'}
}

interface Array<T> {
    last(): T | -1;
}

