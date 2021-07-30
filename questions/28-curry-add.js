/**
 * Write a function, curryChain, that accepts a function and transforms it's usage from add(a, b, c) to addChain(a)(b)(c) or addChain(a, b, c)
 * example:
 * const addChain = curryChain(add);
 * addChain(1, 2, 3)
 * addChain(1)(2)(3)
 */
const curryAdd = (f) => {
  /* implmentation */
  let totalParams = 0;
  let sum = 0;

  return function curried() {
    let args = [...arguments];

    if (totalParams === 0 && args.length >= f.length) {
      // when very first call have all the params
      return f.apply(null, args);
    } else {
      sum = args.slice(0, f.length - totalParams)
        .reduce((acc, current) => {
          totalParams += 1;
          return acc + current
        }, sum);

      if (totalParams === f.length) {
        let result = sum;
        sum = 0;
        totalParams = 0;

        return result;
      } else {
        return curried;
      }
    }
  }
}

module.exports = curryAdd;
