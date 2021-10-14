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

// fastest when < 10 rotations with input of 1000 - 7% faster
export default function toThefront(arr: number[], rotations: number): number[] {
    if (!arr.length) {
        return [];
    }

    for (let i=rotations; i > 0; i--) {
        arr.splice(0, 0, arr.pop());
    }

    return arr;
}

// fastest when > 100 rotations with input of 1000 - 7% faster
export function toTheFront2(arr: number[], rotations: number): number[] {
	const out = Array(rotations);
	for (let i=arr.length - 1, o = out.length - 1, x = rotations; x > 0; x--, i--, o-- ) {
        out[o] = arr[i];
    }
    for (let i=0, o=out.length; i < arr.length - rotations; i++, o++) {
        out[o] = (arr[i]);
    }
    return out;
}