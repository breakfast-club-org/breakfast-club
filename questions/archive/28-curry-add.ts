/**
 * Write a function, curryChain, that accepts a function and transforms it's usage from add(a, b, c) to addChain(a)(b)(c) or addChain(a, b, c)
 * example:
 * const addChain = curryChain(add);
 * addChain(1, 2, 3)
 * addChain(1)(2)(3)
 *
 * https://github.com/learn-javascript-courses/es6-curry
 */

const add = (a, b, c) => a + b + c;
const curryChain = (f, arr = []) => (...args) => (a => a.length === f.length ? f(...a) : curryChain(f, a))([...arr, ...args]);
const addChain = curryChain(add);

// console.log('addChain', addChain(1)(2)(3));
// console.log('addChain', addChain(1, 2, 3));
// console.log('addChain', addChain(1, 2)(3));
// console.log('addChain', addChain(1)(2, 3));

module.exports = addChain;