import { IArrayGrouper } from "./IArrayGrouper";
export declare class ArrayGrouper implements IArrayGrouper {
    /**
     * Splits an array into N number of equally sized arrays.
     * Where the array is not equally divisible by N, the final
     * smaller array will have a length equal to the remainder.
     * @param {number[]} array The original array to be split.
     * @param {number} numberOfArrays The number of arrays for
     * the original array to be split into.
     */
    groupArrayElements(array: number[], numberOfArrays: number): number[][];
}
export declare const groupArrayElements: (array: number[], numberOfArrays: number) => number[][];
