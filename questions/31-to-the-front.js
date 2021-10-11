"use strict";
/**
 * Write a function to move elements of an array a number of times
 * ex:
 * const input = [1,2,3,4,5,6,7]
 *
 * toThefront(input, 4)
 *
 * // should return
 * 1st: [7,1,2,3,4,5,6]
 * 2nd: [6,7,1,2,3,4,5]
 * 3rd: [5,6,7,1,2,3,4]
 * 4th: [4,5,6,7,1,2,3] <- result
 */
exports.__esModule = true;
var input = [1, 2, 3, 4, 5, 6, 7];
function toThefront(arr, rotations) {
    for (var x = 0; x < rotations; x++) {
        arr.unshift(arr.pop());
    }
    return arr;
}
exports["default"] = toThefront;
console.log('toThefront(input, 3)', toThefront(input, 3));
