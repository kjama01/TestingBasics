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
export { calculator, capitalize, reverseString };
