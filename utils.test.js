import { capitalize, reverseString } from "./functions.js";

test("capitalizeString", () => {
  expect(capitalize("nieporownywalny")).toBe("NIEPOROWNYWALNY");
});
test("capitalizeEmptyString", () => {
  expect(capitalize("")).toBe("");
});
test("capitalizeNull", () => {
  expect(capitalize(null)).toBe("");
});
test("capitalizeNumber", () => {
  expect(capitalize(123)).toBe("");
});
test("capitalizeUndefined", () => {
  expect(capitalize(undefined)).toBe("");
});

test("reversedString", () => {
  expect(reverseString("teststring").toBe("gnirtstset"));
});
test("reversedNull", () => {
  expect(reverseString(null).toBe(""));
});
