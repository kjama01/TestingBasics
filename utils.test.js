import {
  caesarCipher,
  capitalize,
  reverseString,
  calculator,
  analyzeArray,
} from "./functions.js";

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
  expect(caesarCipher("abc", 3)).toBe("def");
});
test("ceasarCipherWrapping", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});
test("ceasarCipherWrappingBack", () => {
  expect(caesarCipher("abc", -3)).toBe("xyz");
});
test("ceasarCipherWithNumbers", () => {
  expect(caesarCipher("ab1c", 3)).toBe("de1f");
});
test("ceasarCipherPunctuation", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
test("analyzeArray", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("analyzeArrayNegativeNums", () => {
  expect(analyzeArray([-5, -2, -10, -1])).toEqual({
    average: -4.5,
    min: -10,
    max: -1,
    length: 4,
  });
});

test("analyzeArrayOneElement", () => {
  expect(analyzeArray([7])).toEqual({
    average: 7,
    min: 7,
    max: 7,
    length: 1,
  });
});

test("analyzeArrayFloats", () => {
  expect(analyzeArray([1.5, 2.5, 3.5])).toEqual({
    average: 2.5,
    min: 1.5,
    max: 3.5,
    length: 3,
  });
});

test("analyzeArrayEmpty", () => {
  expect(() => analyzeArray([])).toThrow();
});
