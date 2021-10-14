/**
 * Implement a function called fibonacci that accepts a number and returns the fibonacci number
 * ex: factorial(5), 5 * 4 * 3 * 2 * 1  = 120
 */
export function factorial(n: number): number {
    if (n === 0 || n === 1) {
        return 1;
    }

    for (let i = n - 1; i >= 1; i--) {
        n = n * i;
    }

    return n;
}

/**
 * Implement a function called memoize that can cache the solutions of factorial to improve the
 * efficency of the function
 * const memoizeFactorial = memoize(factorial);
 * ex: memoizedFactorial(5), 5 * 4 * 3 * 2 * 1  = 120 // should be faster the second time it's called in comparison
 */
export function memoize(fn: Function): Function {
    const storage = {};

    return (...args: any[]) => {
        const item = args[0];

        if (storage[item] === undefined) {
            storage[item] = fn(...args);
        }

        return storage[item];
    }
}
