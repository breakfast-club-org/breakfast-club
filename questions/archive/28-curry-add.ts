/**
 * Write a function, curryChain, that accepts a function and transforms it's usage from add(a, b, c) to addChain(a)(b)(c) or addChain(a, b, c)
 * example:
 * const addChain = curryChain(add);
 * addChain(1, 2, 3)
 * addChain(1)(2)(3)
 */

const add = (a, b, c) => {
  return a + b + c;
}

const curryChain = (f) => {
  /* implmentation */
}

const addChain = curryChain(add);

module.exports = addChain;
