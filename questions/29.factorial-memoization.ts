/**
 * Implement a function called fibonacci that accepts a number and returns the fibonacci number
 * ex: factorial(5), 5 * 4 * 3 * 2 * 1  = 120
 */
export function factorial(n: number): number {
	if (n < 0) return -1;
	else if (n === 0) return 1;
	else return (n * factorial(n - 1))
}

/**
 * Implement a function called memoize that can cache the solutions of factorial to improve the
 * efficency of the function
 * const memoizeFactorial = memoize(factorial);
 * ex: memoizedFactorial(5), 5 * 4 * 3 * 2 * 1  = 120 // should be faster the second time it's called in comparison
 */
export function memoize(fn) {
	const cache = {};

	return function(n: number): number {
		if (n in cache) {
			return cache[n];
		} else {
			const result = fn(n);
			cache[n] = result;
			return result;
		}
	}
}
