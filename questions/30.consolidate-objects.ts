/**
 * Write a function to consolidate values in two objects
 * ex:
 * const obj1 = {
 *   thing: 'wow',
 *   something: 'ok',
 *   other: 1
 * }
 *
 * const obj2 = {
 *   thing: 'huh ok',
 *   other: 2
 * }
 *
 * consolidateObjects(obj1, obj2)

 * // should return
 * {
 *   thing: ['wow', 'huh ok'],
 *   something: 'ok',
 *   other: [1, 2]
 * }
 */

const obj1 = {
	thing: 'wow',
	something: 'ok',
	other: 1
}

const obj2 = {
	thing: 'huh ok',
	other: 2
}

export function consolidateObjects(...arr) {
	const result = {};
	arr.forEach(item => {
		Object.keys(item).forEach(key => {
			if (!result[key]) result[key] = [];
			result[key].push(item[key]);
		});
	});
	return result;
}

console.log('consolidateObjects(obj1, obj2)', consolidateObjects(obj1, obj2));

