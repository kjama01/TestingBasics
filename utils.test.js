import { capitalize, reverseString, calculator } from "./functions.js";

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
test("capitalizeNumberWithLetters", () => {
  expect(capitalize("123abc")).toBe("ABC");
});
test("capitalizeUndefined", () => {
  expect(capitalize(undefined)).toBe("");
});

test("reversedString", () => {
  expect(reverseString("teststring")).toBe("gnirtstset");
});
test("reversedNull", () => {
  expect(reverseString(null)).toBe("");
});
test("reversedUndefined", () => {
  expect(reverseString(undefined)).toBe("");
});
test("reversedStringWithNumbers", () => {
  expect(reverseString(12345)).toBe("54321");
});
test("reversedEmpty", () => {
  expect(reverseString("")).toBe("");
});

test("calculatorAdd", () => {
  expect(calculator.add(2, 4)).toBe(6);
});
test("calculatorSubtract", () => {
  expect(calculator.subtract(8, 4)).toBe(4);
});
test("calculatorDivide", () => {
  expect(calculator.divide(8, 4)).toBe(2);
});
test("calculatorMultiply", () => {
  expect(calculator.multiply(8, 4)).toBe(32);
});
test("ceasarCipher", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});
test("ceasarCipher", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
});
test("ceasarCipherWrapping", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});
test("ceasarCipherWithNumbers", () => {
  expect(caesarCipher("ab1c", 3)).toBe("de1f");
});
test("ceasarCipherPunctuation", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
