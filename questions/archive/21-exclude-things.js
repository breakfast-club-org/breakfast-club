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
const matchAny = rules => subject =>
	rules.reduce(
		(a, t) => a || subject[t.k] === t.v,
		false
	);

const excludedFilters = (items, excludes) => {
	const exclude = matchAny(excludes);
	const notExclude = v => !exclude(v);

	return items.filter(notExclude);
}

module.exports = excludedFilters;
