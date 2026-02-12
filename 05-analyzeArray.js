export function analyzeArray(array) {
  return {
    average: Number.parseFloat(
      (
        array.reduce((acc, curr) => {
          return acc + curr;
        }) / array.length
      ).toFixed(2),
    ),
    length: array.length,
    max: Math.max(...array),
    min: Math.min(...array),
  };
}
// console.log(analyzeArray([1, 8, 3, 4, 2, 6]));
