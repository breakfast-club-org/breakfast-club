/**
 * Write a function that converts three numbers that represents a color r,g,b into it's equivalent css hex code
 * ex:
 * convertToHex(255, 255, 255)
 * // should return #FFFFFF
 */

export function valueToHex(v: number): string {
	const value = v.toString(16);
	return value.length === 1 ? '0' + value : value
}

export function convertToHex(r: number, g: number, b: number): string {
	return `#${valueToHex(r)}${valueToHex(g)}${valueToHex(b)}`
}
