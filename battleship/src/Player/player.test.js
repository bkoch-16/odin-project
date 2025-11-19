const Player = require("./player");
const Gameboard = require("../Board/board");
const Ship = require("../Ship/ship");

test("Test real player creation", () => {
  const board = new Gameboard();
  const ship = new Ship(5, 0, false);
  const player1 = new Player("real", board);
  expect(player1.type).toBe("real");
  expect(player1.board).toBe(board);
});

test("Test computer player creation", () => {
  const board2 = new Gameboard();
  const ship2 = new Ship(5, 0, false);
  const player2 = new Player("computer", board2);
  expect(player2.type).toBe("computer");
  expect(player2.board).toBe(board2);
});
