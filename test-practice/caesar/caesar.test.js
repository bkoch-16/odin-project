const caesarCipher = require("./caesar");

test("Shift 'hello' 3 spaces", () => {
  expect(caesarCipher("hello", 3)).toBe("khoor");
});

test("Shift 'world' 3 spaces", () => {
  expect(caesarCipher("world", 3)).toBe("zruog");
});

test("Shift 'xyz' 3 spaces", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("Shift 'HeLLo' 3 spaces", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("Shift 'Hello, World!' 3 spaces", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("Shift 'xyz' 1 space", () => {
  expect(caesarCipher("xyz", 1)).toBe("yza");
});

test("Shift 'xyz' 2 spaces", () => {
  expect(caesarCipher("xyz", 2)).toBe("zab");
});
