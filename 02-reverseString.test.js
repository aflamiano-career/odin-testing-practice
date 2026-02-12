import { reverseString } from "./02-reverseString.js";

test("no word passed", () => {
  expect(reverseString()).toBe("");
});

test("reverse the string - amazing", () => {
  expect(reverseString("amazing")).toBe("gnizama");
});

test("reverse the string - astonishing", () => {
  expect(reverseString("astonishing")).toBe("gnihsinotsa");
});

test("reverse the string - beautiful", () => {
  expect(reverseString("beautiful")).toBe("lufituaeb");
});

test("reverse the string - aMazing", () => {
  expect(reverseString("aMazing")).toBe("gnizaMa");
});

test("creverse the string - asToNishing", () => {
  expect(reverseString("asToNishing")).toBe("gnihsiNoTsa");
});
