/**
 * Write a function that converts three numbers that represents a color r,g,b into it's equivalent css hex code
 * ex:
 * convertToHex(255, 255, 255)
 * // should return #FFFFFF
 */

function convertToHex(r: number, g: number, b: number): string {
    return [r, g, b].reduce((a, d) => a + (d).toString(16).padStart(2, '0').toUpperCase(), '#');
}

export default convertToHex;