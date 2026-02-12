import { calculator } from "./03-calculator.js";

// calculator.add(a, b)
test("add two numbers - 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("add two numbers - 210", () => {
  expect(calculator.add(200, 10)).toBe(210);
});

test("add two numbers - 25", () => {
  expect(calculator.add(-5, 30)).toBe(25);
});

test("add two numbers - -45", () => {
  expect(calculator.add(5, -50)).toBe(-45);
});

test("add two numbers - -35", () => {
  expect(calculator.add(-5, -30)).toBe(-35);
});

test("add two numbers - 30", () => {
  expect(calculator.add(0, 30)).toBe(30);
});

test("add two numbers - 50", () => {
  expect(calculator.add(50, 0)).toBe(50);
});

test("add two numbers - 1st number is NaN", () => {
  expect(calculator.add("", 0)).toBe(0);
});

test("add two numbers - 2nd number is NaN", () => {
  expect(calculator.add(1, "")).toBe(0);
});

test("add two numbers - 1st number is a string", () => {
  expect(calculator.add("1", 5)).toBe(0);
});

test("add two numbers - 2nd number is a string", () => {
  expect(calculator.add(10, "5")).toBe(0);
});

// calculator.subtract(a, b)
test("subtract two numbers - 3", () => {
  expect(calculator.subtract(5, 2)).toBe(3);
});

test("subtract two numbers - -90", () => {
  expect(calculator.subtract(110, 200)).toBe(-90);
});

test("subtract two numbers - -25", () => {
  expect(calculator.subtract(-5, 20)).toBe(-25);
});

test("subtract two numbers - 55", () => {
  expect(calculator.subtract(5, -50)).toBe(55);
});

test("subtract two numbers - 35", () => {
  expect(calculator.subtract(-5, -40)).toBe(35);
});

test("subtract two numbers - -30", () => {
  expect(calculator.subtract(0, 30)).toBe(-30);
});

test("subtract two numbers - 50", () => {
  expect(calculator.subtract(50, 0)).toBe(50);
});

test("subtract two numbers - 1st number is NaN", () => {
  expect(calculator.subtract("", 0)).toBe(0);
});

test("subtract two numbers - 2nd number is NaN", () => {
  expect(calculator.subtract(1, "")).toBe(0);
});

test("subtract two numbers - 1st number is a string", () => {
  expect(calculator.subtract("1", 5)).toBe(0);
});

test("subtract two numbers - 2nd number is a string", () => {
  expect(calculator.subtract(10, "5")).toBe(0);
});

// calculator.multiply(a, b)
test("multiply two numbers - 10", () => {
  expect(calculator.multiply(5, 2)).toBe(10);
});

test("multiply two numbers - 400", () => {
  expect(calculator.multiply(2, 200)).toBe(400);
});

test("multiply two numbers - -100", () => {
  expect(calculator.multiply(-5, 20)).toBe(-100);
});

test("multiply two numbers - -250", () => {
  expect(calculator.multiply(5, -50)).toBe(-250);
});

test("multiply two numbers - 200", () => {
  expect(calculator.multiply(-5, -40)).toBe(200);
});

test("multiply two numbers - 0", () => {
  expect(calculator.multiply(0, 30)).toBe(0);
});

test("multiply two numbers - 0", () => {
  expect(calculator.multiply(50, 0)).toBe(0);
});

test("multiply two numbers - 1st number is NaN", () => {
  expect(calculator.multiply("", 0)).toBe(0);
});

test("multiply two numbers - 2nd number is NaN", () => {
  expect(calculator.multiply(1, "")).toBe(0);
});

test("multiply two numbers - 1st number is a string", () => {
  expect(calculator.multiply("1", 5)).toBe(0);
});

test("multiply two numbers - 2nd number is a string", () => {
  expect(calculator.multiply(10, "5")).toBe(0);
});

// calculator.divide(a, b)
test("divide two numbers - 2.5", () => {
  expect(calculator.divide(5, 2)).toBe(2.5);
});

test("divide two numbers - .55", () => {
  expect(calculator.divide(110, 200)).toBe(0.55);
});

test("divide two numbers - -0.25", () => {
  expect(calculator.divide(-5, 20)).toBe(-0.25);
});

test("divide two numbers - -0.1", () => {
  expect(calculator.divide(5, -50)).toBe(-0.1);
});

test("divide two numbers - 1.25", () => {
  expect(calculator.divide(-5, -4)).toBe(1.25);
});

test("divide two numbers - 0", () => {
  expect(calculator.divide(0, 30)).toBe(0);
});

test("divide two numbers - 0", () => {
  expect(calculator.divide(50, 0)).toBe(0);
});

test("divide two numbers - 1st number is NaN", () => {
  expect(calculator.divide("", 0)).toBe(0);
});

test("divide two numbers - 2nd number is NaN", () => {
  expect(calculator.divide(1, "")).toBe(0);
});

test("divide two numbers - 1st number is a string", () => {
  expect(calculator.divide("1", 5)).toBe(0);
});

test("divide two numbers - 2nd number is a string", () => {
  expect(calculator.divide(10, "5")).toBe(0);
});

test("should have 2 decimals after division - 1.08", () => {
  expect(calculator.divide(13, 12)).toBe(1.08);
});
