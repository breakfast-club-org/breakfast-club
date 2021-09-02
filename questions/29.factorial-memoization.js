"use strict";
exports.__esModule = true;
exports.memoize = exports.factorial = void 0;
/**
 * Implement a function called fibonacci that accepts a number and returns the fibonacci number
 * ex: factorial(5), 5 * 4 * 3 * 2 * 1  = 120
 */
function factorial(n) {
    if (n < 0)
        return -1;
    else if (n === 0)
        return 1;
    else
        return (n * factorial(n - 1));
}
exports.factorial = factorial;
/**
 * Implement a function called memoize that can cache the solutions of factorial to improve the
 * efficency of the function
 * const memoizeFactorial = memoize(factorial);
 * ex: memoizedFactorial(5), 5 * 4 * 3 * 2 * 1  = 120 // should be faster the second time it's called in comparison
 */
function memoize(fn) {
    var cache = {};
    return function (n) {
        if (n in cache) {
            console.log('fetching from cache');
            return cache[n];
        }
        else {
            console.log('creating result and adding to cache');
            var result = fn(n);
            cache[n] = result;
            return result;
        }
    };
}
exports.memoize = memoize;
var memoizeFactorial = memoize(factorial);
console.log('memoizeFactorial(5)', memoizeFactorial(5));
console.log('memoizeFactorial(5)', memoizeFactorial(10));
console.log('memoizeFactorial(5)', memoizeFactorial(4));
console.log('memoizeFactorial(5)', memoizeFactorial(22));
console.log('memoizeFactorial(5)', memoizeFactorial(5));
console.log('memoizeFactorial(5)', memoizeFactorial(4));
console.log('memoizeFactorial(5)', memoizeFactorial(22));
console.log('memoizeFactorial(5)', memoizeFactorial(10));
