export const calculator = (function () {
  function isValid(a, b) {
    return typeof a !== "number" ||
      typeof b !== "number" ||
      Number.isNaN(a) ||
      Number.isNaN(b)
      ? false
      : true;
  }

  const add = (a, b) => {
    return isValid(a, b) ? a + b : 0;
  };
  const subtract = (a, b) => {
    return isValid(a, b) ? a - b : 0;
  };
  const multiply = (a, b) => {
    return isValid(a, b) ? a * b : 0;
  };
  const divide = (a, b) => {
    if (b === 0) {
      return 0;
    }
    return isValid(a, b) ? Number.parseFloat((a / b).toFixed(2)) : 0;
  };

  return { add, subtract, multiply, divide };
})();
