"use strict";
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
exports.__esModule = true;
exports.consolidateObjects = void 0;
var obj1 = {
    thing: 'wow',
    something: 'ok',
    other: 1
};
var obj2 = {
    thing: 'huh ok',
    other: 2
};
function consolidateObjects() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    var result = {};
    arr.forEach(function (item) {
        Object.keys(item).forEach(function (key) {
            if (!result[key])
                result[key] = [];
            result[key].push(item[key]);
        });
    });
    return result;
}
exports.consolidateObjects = consolidateObjects;
console.log('consolidateObjects(obj1, obj2)', consolidateObjects(obj1, obj2));
