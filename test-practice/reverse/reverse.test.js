const reverseString = require("./reverse");
const reverse = require("./reverse");

test('reverse "reverse"', () => {
  expect(reverseString("reverse")).toBe("esrever");
});

test('reverse "DOG"', () => {
  expect(reverseString("DOG")).toBe("GOD");
});

test('reverse "rAt"', () => {
  expect(reverseString("rAt")).toBe("tAr");
});
