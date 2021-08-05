/**
 * Write a function, curryChain, that accepts a function and transforms it's usage from add(a, b, c) to addChain(a)(b)(c) or addChain(a, b, c)
 * example:
 * const addChain = curryChain(add);
 * addChain(1, 2, 3)
 * addChain(1)(2)(3)
 */


// const add = (a, b, c) => {
//     return a + b + c;
// }

// const curryChain = (f) => {
//     const curryFunc = (...args) => {
//         console.log(...args)
//         if (args.length >= f.length) {
//             return f.apply(this, args);
//         } else {
//             return function(...args2) {
//                 return curryFunc.apply(this, args.concat(args2));
//             }
//         }
//     }
//     return curryFunc;
// };

interface AddProps {
    a: number,
    b: number,
    c: number
}

const add = ({a, b, c}: AddProps): number => {
    return a + b + c;
}

const curryChain = (f: Function): Function => {

    const curryFunc = (...args: [number]): Function | number => {
        if (args.length >= f.length) {
            return f.apply(this, args);
        } else {
            return function(...args2) {
                return curryFunc.apply(this, args.concat(args2));
            }
        }
    }

    return curryFunc;
};

const addChain = curryChain(add);

module.exports = addChain;
