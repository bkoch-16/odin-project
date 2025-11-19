const capitalize = require("./cap");

test('capitalize "cat"', () => {
  expect(capitalize("cat")).toBe("Cat");
});

test('capitalize "dOG"', () => {
  expect(capitalize("dOG")).toBe("DOG");
});

test('capitalize "RAT"', () => {
  expect(capitalize("RAT")).toBe("RAT");
});
