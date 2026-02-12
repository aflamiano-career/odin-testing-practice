import { analyzeArray } from "./05-analyzeArray.js";

test("Array #1: [1, 8, 3, 4, 2, 6]", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("Array #2: [1, 8, 3, 4, 2, 6]", () => {
  expect(analyzeArray([11, 18, 13, 14, 12, 16])).toEqual({
    average: 14,
    min: 11,
    max: 18,
    length: 6,
  });
});

test("Array #3: [5, 12, 2, 18, 19, 13, 8, 3, 4, 6]", () => {
  expect(analyzeArray([5, 12, 2, 18, 19, 13, 8, 3, 4, 6])).toEqual({
    average: 9,
    min: 2,
    max: 19,
    length: 10,
  });
});

test("Array #4: [1, 1, 2, 2, 3, 3]", () => {
  expect(analyzeArray([1, 1, 2, 2, 3, 3])).toEqual({
    average: 2,
    min: 1,
    max: 3,
    length: 6,
  });
});

test("Array #5: [1, -8, 4, -9, 2]", () => {
  expect(analyzeArray([1, -8, 4, -9, 2])).toEqual({
    average: -2,
    min: -9,
    max: 4,
    length: 5,
  });
});

test("Array #6: [2, -28, 5, -18, 26]", () => {
  expect(analyzeArray([2, -28, 5, -18, 26])).toEqual({
    average: -2.6,
    min: -28,
    max: 26,
    length: 5,
  });
});

test("Array #7: [6, 16, 2, 18, 14, 2]", () => {
  expect(analyzeArray([6, 16, 2, 17, 14, 4])).toEqual({
    average: 9.83,
    min: 2,
    max: 17,
    length: 6,
  });
});
