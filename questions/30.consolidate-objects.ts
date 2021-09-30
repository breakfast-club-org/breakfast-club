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

export function consolidateObjects(objOne: object, objTwo: object): object  {
	const result = {};

	for (const key in objOne) {
		if (objTwo[key]) {
			result[key] = [];
			result[key].push(objOne[key]);
			result[key].push(objTwo[key])
		} else {
			result[key] = objOne[key]
		}
	}
	return result;
}

console.log('consolidateObjects(obj1, obj2)', consolidateObjects(obj1, obj2));

