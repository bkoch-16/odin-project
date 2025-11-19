const Player = require("./Player/player");
const Gameboard = require("./Board/board");
const Ship = require("./Ship/ship");
const css = require("./styles.css");

const board1 = new Gameboard();
const player1 = new Player("real", board1);

const board2 = new Gameboard();
const player2 = new Player("computer", board2);
const ship2 = new Ship(3, 0, false);
board2.placeShip(ship2, ["C1", "C2", "C3"]);

const playerTwoTiles = document.querySelectorAll("#playerTwo .tile");
playerTwoTiles.forEach((tile) => {
  tile.addEventListener("click", () => {
    if (board1.checkSink()) {
      alert("Player 2 wins!");
    } else if (board2.checkSink()) {
      alert("Player 1 wins!");
    } else {
      board2.receiveAttack(tile.id);
      board2.renderBoard("lightblue", "playerTwo");
      if (board2.checkSink()) {
        alert("Game over, player 1 wins!");
      } else {
        board1.receiveAttack(moveOptions[moveCount]);
        moveCount += 1;
        board1.renderBoard("red", "playerOne");
        if (board1.checkSink()) {
          alert("Game over, player 2 wins!");
        }
      }
    }
  });
});

const newShipForm = document.querySelector(".newShipForm");
newShipForm.addEventListener("submit", () => {
  event.preventDefault();
  const shipStart = document.querySelector("#ship-start").value;
  const shipEnd = document.querySelector("#ship-end").value;
  const outcome = board1.createCoordArray(shipStart, shipEnd);
  if (typeof outcome === "string") {
    alert(outcome);
  } else {
    const newShip = new Ship(outcome.length);
    board1.placeShip(newShip, outcome);
  }
  newShipForm.reset();
  document.querySelector("#ship-start").focus();
});

var moveCount = 0;
const moveOptions = [
  "A1",
  "A2",
  "A3",
  "A4",
  "A5",
  "A6",
  "A7",
  "A8",
  "A9",
  "A10",
  "B1",
  "B2",
  "B3",
  "B4",
  "B5",
  "B6",
  "B7",
  "B8",
  "B9",
  "B10",
  "C1",
  "C2",
  "C3",
  "C4",
  "C5",
  "C6",
  "C7",
  "C8",
  "C9",
  "C10",
  "D1",
  "D2",
  "D3",
  "D4",
  "D5",
  "D6",
  "D7",
  "D8",
  "D9",
  "D10",
  "E1",
  "E2",
  "E3",
  "E4",
  "E5",
  "E6",
  "E7",
  "E8",
  "E9",
  "E10",
  "F1",
  "F2",
  "F3",
  "F4",
  "F5",
  "F6",
  "F7",
  "F8",
  "F9",
  "F10",
  "G1",
  "G2",
  "G3",
  "G4",
  "G5",
  "G6",
  "G7",
  "G8",
  "G9",
  "G10",
  "H1",
  "H2",
  "H3",
  "H4",
  "H5",
  "H6",
  "H7",
  "H8",
  "H9",
  "H10",
  "I1",
  "I2",
  "I3",
  "I4",
  "I5",
  "I6",
  "I7",
  "I8",
  "I9",
  "I10",
  "J1",
  "J2",
  "J3",
  "J4",
  "J5",
  "J6",
  "J7",
  "J8",
  "J9",
  "J10",
];
