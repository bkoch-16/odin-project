const capitalize = require("./calc");

test("Add 2+5", () => {
  expect(calculator.add(2, 5)).toBe(7);
});

test("Subtract 8-2", () => {
  expect(calculator.subtract(8, 2)).toBe(6);
});

test("Divide 10/2", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test("Multiply 2*2", () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});

test("Add 10+5", () => {
  expect(calculator.add(10, 5)).toBe(15);
});

test("Subtract 18-2", () => {
  expect(calculator.subtract(18, 2)).toBe(16);
});

test("Divide 34/2", () => {
  expect(calculator.divide(34, 2)).toBe(17);
});

test("Multiply 9*2", () => {
  expect(calculator.multiply(9, 2)).toBe(18);
});
