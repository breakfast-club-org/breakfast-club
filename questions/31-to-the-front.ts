/**
 * Write a function to move elements of an array a number of times
 * ex:
 * const input = [1,2,3,4,5,6,7]
 * 
 * toThefront(input, 4)
 * 
 * // should return
 * 1st: [7,1,2,3,4,5,6]
 * 2nd: [6,7,1,2,3,4,5]
 * 3rd: [5,6,7,1,2,3,4]
 * 4th: [4,5,6,7,1,2,3] <- result
 */

interface toTheFrontProps {
    arr: number[];
    rotations: number;
}

export function toTheFront({arr, rotations}: toTheFrontProps): number[] {
    const n = rotations;

    const front = arr.slice(arr.length - n, arr.length)
    const back = arr.slice(0, arr.length - n)

    return [...front, ...back]
}
