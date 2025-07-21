type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    let res = init
    for (let i = 0; i < nums.length; i++){
        res = fn(res,nums[i])
    }
    return res
};
///////////////////////////
type Fnc = (n: number, i: number) => any

function filter(arr: number[], fn: Fnc): number[] {
    let array = []
    for(let i = 0; i < arr.length; i++){
        if(fn(arr[i],i)){
            array.push(arr[i])
        }
    }
    return array
}

function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    let result = []
    for(let i = 0; i<arr.length; i++){
        result.push(fn(arr[i], i))
    }
    return result
};