/**
 * create a method that will filter an array of objets based on key or value
 * input:
 * const thing = [
 *   {
 *     'animal': 'dog',
 *     'name': 'billy'
 *   },
 *   {
 *     'animal': 'cat',
 *     ''name'': 'pickles'
 *   }
 * ]
 * const excludes = [
 *   k: 'animal',
 *   v: 'dog'
 * ]
 * output:
 * [
 *   {
 *     'animal': 'cat',
 *     ''name'': 'pickles'
 *   }
 * ]
 */
// const any = (item, tests) =>
// 	tests.reduce(
// 		(a, t) => a || item[t.k] === t.v,
// 		false
// 	);
const any = (item, [check, ...rest]) =>
	(item[check.k] === check.v)
	? true
	: rest.length
	? any(item, rest)
	: false;

const excludedFilters = (items, excludes) =>
	items.filter(item => !any(item, excludes));

module.exports = excludedFilters;
