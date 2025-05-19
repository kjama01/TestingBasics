function capitalize(string) {
  if (!string || string == "") return "";
  string = string.toString().toUpperCase();
  let str = "";
  for (let i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) >= 48 && string.charCodeAt(i) <= 57) continue;
    str += string[i];
  }
  return str;
}
function reverseString(string) {
  if (!string && string !== 0) return "";
  string = string.toString();
  let str = "";
  for (let i = string.length - 1; i >= 0; i--) {
    str += string[i];
  }
  return str;
}
const calculator = {
  add: (num1, num2) => {
    return num1 + num2;
  },
  subtract: (num1, num2) => {
    return num1 - num2;
  },
  multiply: (num1, num2) => {
    return num1 * num2;
  },
  divide: (num1, num2) => {
    return num1 / num2;
  },
};
function caesarCipher(string, shift) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    let shifted = null;
    if (isLetter(string[i])) {
      shifted = string[i].charCodeAt(0) + shift;
      if (isUpperCase(string[i])) {
        if (shifted > 90) shifted -= 26;
        if (shifted < 65) shifted += 26;
      } else {
        if (shifted > 122) shifted -= 26;
        if (shifted < 97) shifted += 26;
      }
      result += String.fromCharCode(shifted);
    } else {
      result += string[i];
    }
  }
  return result;
}
function isUpperCase(char) {
  return char === char.toUpperCase() && char !== char.toLowerCase();
}
function isLetter(char) {
  if (
    (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) ||
    (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)
  )
    return true;
  return false;
}
function analyzeArray(arr) {
  if (arr.length === 0) throw new Error("Array is empty");
  const sum = arr.reduce((a, b) => {
    return a + b;
  }, 0);
  return {
    average: sum / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
}
export { analyzeArray, calculator, capitalize, reverseString, caesarCipher };
