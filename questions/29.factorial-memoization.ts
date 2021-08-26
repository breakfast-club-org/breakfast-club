/**
 * Implement a function called fibonacci that accepts a number and returns the fibonacci number
 * ex: factorial(5), 5 * 4 * 3 * 2 * 1  = 120
 */
export function factorial(n: number) : number {
    return (n < 2)
        ? 1
        : n * factorial(n - 1);
}

interface MemoizedFn<T> {
    (...args: T[]): T;
}

/**
 * Implement a function called memoize that can cache the solutions of factorial to improve the
 * efficency of the function
 * const memoizeFactorial = memoize(factorial);
 * ex: memoizedFactorial(5), 5 * 4 * 3 * 2 * 1  = 120 // should be faster the second time it's called in comparison
 */
export function memoize<T>(fn: Function) : MemoizedFn<T> {
    const cache = new WeakMap();

    return function memoized<T>(...args: T[]): T {
        const key = JSON.stringify(args);
        if (key in cache) {
            return cache[key];
        } else {
            const v = fn(...args);
            cache[key] = v;
            return v;
        }
    }
}
