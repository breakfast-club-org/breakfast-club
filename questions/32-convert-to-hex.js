"use strict";
/**
 * Write a function that converts three numbers that represents a color r,g,b into it's equivalent css hex code
 * ex:
 * convertToHex(255, 255, 255)
 * // should return #FFFFFF
 */
exports.__esModule = true;
exports.convertToHex = exports.valueToHex = void 0;
function valueToHex(v) {
    var value = v.toString(16);
    return value.length === 1 ? '0' + value : value;
}
exports.valueToHex = valueToHex;
function convertToHex(r, g, b) {
    return "#" + valueToHex(r) + valueToHex(g) + valueToHex(b);
}
exports.convertToHex = convertToHex;
// const convertToHex = (r: number, g: number, b: number): string => `#` + [r, g, b].map(v => {
// 	const hex = v.toString(16);
// 	// return hex.length === 1 ? '0' + hex : hex
// 	console.log('hex', hex);
// }).join('')
console.log('convertToHex: ', convertToHex(98, 51, 0x4f));
