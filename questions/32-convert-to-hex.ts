/**
 * Write a function that converts three numbers that represents a color r,g,b into it's equivalent css hex code
 * ex:
 * convertToHex(255, 255, 255)
 * // should return #FFFFFF
 */

export function convertToHex(r: number, g: number, b: number): string {
    const colorArr = [...arguments].map((value) => {
        return value.toString(16).padStart(2, '0');
    });

    colorArr.unshift('#');

    return colorArr.join('');
};
