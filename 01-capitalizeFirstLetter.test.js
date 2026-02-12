import { capitalizeFirstLetter } from "./01-capitalizeFirstLetter.js";

test("no word passed", () => {
  expect(capitalizeFirstLetter()).toBe("");
});

test("capitalize first letter - amazing", () => {
  expect(capitalizeFirstLetter("amazing")).toBe("Amazing");
});

test("capitalize first letter - astonishing", () => {
  expect(capitalizeFirstLetter("astonishing")).toBe("Astonishing");
});

test("capitalize first letter - beautiful", () => {
  expect(capitalizeFirstLetter("beautiful")).toBe("Beautiful");
});

test("capitalize first letter - aMazing", () => {
  expect(capitalizeFirstLetter("aMazing")).toBe("Amazing");
});

test("capitalize first letter - asToNishing", () => {
  expect(capitalizeFirstLetter("asToNishing")).toBe("Astonishing");
});
