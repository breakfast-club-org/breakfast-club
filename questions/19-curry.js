/**
 * create an add() that supports two different invocations:
 * 1) single argument: add(1)(2)()...
 * 2) argument list: add(1,2,3...)
 *
 * this is essentially looking for a solution of currying pattern
 */
const curry = fn => {
	const curried = (...args) => (
		(args.length >= fn.length)
		? fn.apply(null, args)
		: curried.bind(null, ...args)
	)

	return curried;
}

module.exports = curry;