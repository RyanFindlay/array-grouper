import { IArrayGrouper } from "./IArrayGrouper";

export class ArrayGrouper implements IArrayGrouper {
  /**
   * Splits an array into N number of equally sized arrays.
   * Where the array is not equally divisible by N, the final
   * smaller array will have a length equal to the remainder.
   * @param {number[]} array The original array to be split.
   * @param {number} numberOfArrays The number of arrays for
   * the original array to be split into.
   */
  public groupArrayElements(
    array: number[],
    numberOfArrays: number
  ): number[][] {
    if (numberOfArrays === 0) {
      throw new Error("numberOfArrays must be > 0.");
    }

    if (!array.length) {
      throw new Error("array cannot be empty");
    }
    
    if (numberOfArrays > array.length) {
      throw new Error("numberOfArrays must be <= array.length");
    }

    if (numberOfArrays === 1) {
      return [array];
    }

    var result = [];
    /**
     * We ceil the result of this division to deal with arrays
     * that are not equally divisible by numberOfArrays
     */
    var chunkSize = Math.ceil(array.length / numberOfArrays);

    while (array.length) {
      result.push(array.splice(0, chunkSize));
    }

    return result;
  }
}
export const groupArrayElements = ArrayGrouper.prototype.groupArrayElements;