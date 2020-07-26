import { groupArrayElements } from "../ArrayGrouper";

describe("groupArrayElements", () => {
  test("should return error message when numberOfArrays equals zero", () => {
    expect(() => {
      groupArrayElements([0], 0);
    }).toThrowError("numberOfArrays must be > 0");
  });

  test("should return error message when given an empty array", () => {
    expect(() => {
      groupArrayElements([], 5);
    }).toThrowError("array cannot be empty");
  });

  test("should return error message when numberOfArrays is greater than the length of array", () => {
    expect(() => {
      groupArrayElements([1, 2, 3, 4, 5], 10);
    }).toThrowError("numberOfArrays must be <= array.length");
  });

  test.each`
    array
    ${[1]}
    ${[1, 2, 3]}
    ${[5, 17, 99]}
  `(
    "should return an array containing the input array when numberOfArrays equals one",
    ({ array }) => {
      expect(groupArrayElements(array, 1)).toEqual([array]);
    }
  );

  test.each`
    array                  | numberOfArrays | result
    ${[1]}                 | ${1}           | ${[[1]]}
    ${[1, 2, 3]}           | ${3}           | ${[[1], [2], [3]]}
    ${[5, 17, 99, 37, 54]} | ${5}           | ${[[5], [17], [99], [37], [54]]}
  `(
    "should return the correct result when the original array is equally divisible by numberOfArrays",
    ({ array, numberOfArrays, result }) => {
      expect(groupArrayElements(array, numberOfArrays)).toEqual(
        result
      );
    }
  );

  test.each`
    array                  | numberOfArrays | result
    ${[1, 2, 3]}           | ${2}           | ${[[1, 2], [3]]}
    ${[5, 17, 99, 37, 54]} | ${3}           | ${[[5, 17], [99, 37], [54]]}
  `(
    "should return the correct result when the original array is NOT equally divisible by numberOfArrays",
    ({ array, numberOfArrays, result }) => {
      expect(groupArrayElements(array, numberOfArrays)).toEqual(
        result
      );
    }
  );

  test("should return correct result when given input shown on challenge description", () => {
    expect(groupArrayElements([1, 2, 3, 4, 5], 3)).toEqual([
      [1, 2],[3, 4],[5]
    ]);
  });
});
