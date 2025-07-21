"use strict";
function reduce(nums, fn, init) {
    let res = init;
    for (let i = 0; i < nums.length; i++) {
        res = fn(res, nums[i]);
    }
    return res;
}
;
function filter(arr, fn) {
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            array.push(arr[i]);
        }
    }
    return array;
}
function map(arr, fn) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i));
    }
    return result;
}
;
