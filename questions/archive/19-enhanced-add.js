/**
 * create an add() that supports two different invocations:
 * 1) single argument: add(1)(2)()...
 * 2) argument list: add(1,2,3...)
 */

const add = function () {
    let args = [...arguments];

    function closureAdd(){
      args = [...args, ...arguments];

      if (args.length >= 3) {
        return args.slice(0, args.length).reduce((acc, next) => { return acc + next}, 0);
      }

      return closureAdd;
    }

    return closureAdd();
}

module.exports = add;
