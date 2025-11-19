const Ship = require("./ship");
const ship = new Ship(5, 5, false);

test("Test isSunk function", () => {
  expect(ship.isSunk()).toBeTruthy();
});

const ship2 = new Ship(5, 3, false);

test("Test isSunk function second case", () => {
  expect(ship2.isSunk()).toBeFalsy();
});

const ship3 = new Ship(5, 4, false);
ship3.hit();

test("Test hit incrementing", () => {
  expect(ship3.hits).toBe(5);
});

test("Test sink status change", () => {
  expect(ship3.isSunk()).toBe(true);
});
