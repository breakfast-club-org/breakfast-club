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
type Primitives = string | number | boolean;
type PrimObj = Record<string, Primitives>;
export default function consolidateObjects(objOne: PrimObj, objTwo: PrimObj): Record<string, unknown> {
    const ro: Record<string, unknown> = {...objOne};

    Object
        .entries(objTwo)
        .forEach(([k, v]) => {
            const valueInRO = ro[k]; // O(1)
            if (valueInRO) {
                // O(1) because only two objects and each key has a max of two values
                ro[k] = Array.isArray(valueInRO) ? [...valueInRO, v] : [valueInRO, v];
            } else {
                ro[k] = v;
            }
        });

    return ro;
}
