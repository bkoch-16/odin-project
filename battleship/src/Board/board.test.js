const Gameboard = require("./board");
const Ship = require("../Ship/ship");

const board = new Gameboard();
const ship = new Ship(5, 0, false);

test("Test failed ship placement on board missing values", () => {
  expect(board.placeShip(ship, ["C3", "C4"])).toBe(false);
});

test("Test failed ship placement on board out of bounds", () => {
  expect(board.placeShip(ship, ["A0", "A1", "A2", "A3", "A4"])).toBe(false);
});

test("Test succeeded ship placement on board", () => {
  expect(board.placeShip(ship, ["C3", "C4", "C5", "C6", "C7"])).toBe(true);
});

test("Test ship placement storage", () => {
  expect(board.board).toEqual({
    C3: ship,
    C4: ship,
    C5: ship,
    C6: ship,
    C7: ship,
  });
});

test("Test ship placement list", () => {
  expect(board.ships).toEqual([ship]);
});

test("Test shot that hits a ship", () => {
  board.receiveAttack("C4");
  expect(board.ships[0].hits).toBe(1);
});

test("Test shot that misses a ship", () => {
  board.receiveAttack("A1");
  expect(board.shotHit).toEqual({ A1: false, C4: true });
});

test("Test repeated shot that hits a ship", () => {
  expect(board.receiveAttack("C4")).toBe("repeat");
});

test("Check if all ships are sunk", () => {
  expect(board.checkSink()).toBeFalsy();
});

test("Sink ships then check if they're sunk", () => {
  board.receiveAttack("C3");
  board.receiveAttack("C5");
  board.receiveAttack("C6");
  board.receiveAttack("C7");
  expect(board.checkSink()).toBeTruthy();
});

test("Create coordinate array for vertical ship placement", () => {
  expect(board.createCoordArray("B3", "B7")).toEqual([
    "B3",
    "B4",
    "B5",
    "B6",
    "B7",
  ]);
});

test("Create coordinate array for horizontal ship placement", () => {
  expect(board.createCoordArray("A4", "D4")).toEqual(["A4", "B4", "C4", "D4"]);
});

test("Invalid start coordinate", () => {
  expect(board.createCoordArray("A0", "D4")).toBe("Invalid start coordinate");
});

test("Invalid end coordinate", () => {
  expect(board.createCoordArray("A1", "D11")).toBe("Invalid end coordinate");
});

test("Diagonal ship", () => {
  expect(board.createCoordArray("A1", "D2")).toBe(
    "Ship not vertical or horizontal",
  );
});

test("Ship too long", () => {
  expect(board.createCoordArray("A1", "A10")).toBe("Ship length error");
});

test("Ship too long", () => {
  expect(board.createCoordArray("A1", "I1")).toBe("Ship length error");
});
