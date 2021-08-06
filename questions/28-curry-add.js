/**
 * Write a function, curryChain, that accepts a function and transforms it's usage from add(a, b, c) to addChain(a)(b)(c) or addChain(a, b, c)
 * example:
 * const addChain = curryChain(add);
 * addChain(1, 2, 3)
 * addChain(1)(2)(3)
 */
const curry = (f) => {
  /* implmentation */
  let args = [];

  return function curried() {
    args = [...args, ...arguments];

    if (args.length >= f.length) {
      const rs = f.apply(null, args)
      args = [];

      return rs;
    } else {
      return curried;
    }
  }
}

module.exports = curry;
