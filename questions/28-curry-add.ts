/**
 * Write a function that accepts a function and transforms it's usage from add(a, b, c) to addChain(a)(b)(c) or addChain(a, b, c)
 */

const add = (a, b, c) => {
  return a + b + c;
}

const addChain = (f) => {
  /* implmentation */
}

module.exports = addChain;
