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
 * 
 * // should return 
 * {
 *   thing: ['wow', 'huh ok'],
 *   something: 'ok',
 *   other: [1, 2]
 * }
 */

interface ConsolidateObjectsProp {
    objOne: object;
    objTwo: object;
}

export function consolidateObjects({objOne, objTwo}: ConsolidateObjectsProp): object  {
    const obj = {};

    for (let key in objOne) {
        if (objTwo[key]) {
            obj[key] = [];
            obj[key].push(objOne[key])
            obj[key].push(objTwo[key])
        } else {
            obj[key] = objOne[key]
        }
    }

    return obj;
};
