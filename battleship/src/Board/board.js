class Gameboard {
  constructor() {
    this.ships = [];
    this.board = {};
    this.shotHit = {};
  }

  placeShip(newShip, coord) {
    if (coord.length !== newShip.length) {
      return false;
    } else {
      for (const element of coord) {
        const letter = element.slice(0, 1).toUpperCase();
        const charCode = letter.charCodeAt(0);
        const number = element.slice(1);
        if (charCode < 65 || charCode > 90 || number < 1 || number > 10) {
          return false;
        }
      }
      for (const element of coord) {
        this.board[element] = newShip;
      }
      this.ships.push(newShip);
      return true;
    }
  }

  createCoordArray(shipStart, shipEnd) {
    const shipCoords = [];

    if (
      shipStart.slice(0, 1).toUpperCase().charCodeAt(0) < 65 ||
      shipStart.slice(0, 1).toUpperCase().charCodeAt(0) > 90 ||
      shipStart.slice(1) < 1 ||
      shipStart.slice(1) > 10
    ) {
      return "Invalid start coordinate";
    } else if (
      shipEnd.slice(0, 1).toUpperCase().charCodeAt(0) < 65 ||
      shipEnd.slice(0, 1).toUpperCase().charCodeAt(0) > 90 ||
      shipEnd.slice(1) < 1 ||
      shipEnd.slice(1) > 10
    ) {
      return "Invalid end coordinate";
    } else if (
      !(
        (shipStart.slice(0, 1).toLowerCase() !==
          shipEnd.slice(0, 1).toLowerCase() &&
          shipStart.slice(1) === shipEnd.slice(1)) ||
        (shipStart.slice(0, 1).toLowerCase() ===
          shipEnd.slice(0, 1).toLowerCase() &&
          shipStart.slice(1) !== shipEnd.slice(1))
      )
    ) {
      return "Ship not vertical or horizontal";
    } else if (
      Math.abs(
        shipStart.slice(0, 1).toUpperCase().charCodeAt(0) -
          shipEnd.slice(0, 1).toUpperCase().charCodeAt(0),
      ) > 5 ||
      Math.abs(shipStart.slice(1) - shipEnd.slice(1)) > 5
    ) {
      return "Ship length error";
    }
    if (
      shipStart.slice(0, 1).toUpperCase() === shipEnd.slice(0, 1).toUpperCase()
    ) {
      shipCoords.push(shipStart);
      const shipLetter = shipStart.slice(0, 1);
      let iterator = Number(shipStart.slice(1));
      while (iterator !== Number(shipEnd.slice(1))) {
        iterator += 1;
        shipCoords.push(shipLetter + iterator);
      }
    } else if (shipStart.slice(1) === shipEnd.slice(1)) {
      const letter = shipStart.slice(0, 1).toUpperCase();
      const charCode = letter.charCodeAt(0);
      shipCoords.push(shipStart);
      const number = shipStart.slice(1);
      let iterator = charCode;
      while (iterator !== shipEnd.slice(0, 1).toUpperCase().charCodeAt(0)) {
        iterator += 1;
        shipCoords.push(String.fromCharCode(iterator) + number);
      }
    }

    return shipCoords;
  }

  receiveAttack(target) {
    if (this.shotHit[target] === undefined) {
      if (this.board[target]) {
        this.board[target].hit();
        this.shotHit[target] = true;
        return true;
      } else {
        this.shotHit[target] = false;
        return false;
      }
    } else return "repeat";
  }

  checkSink() {
    for (const ship of this.ships) {
      if (ship.sunk === false) {
        return false;
      }
    }
    return true;
  }

  renderBoard(color, playerNum) {
    for (const tile in this.board) {
      if (this.board[tile].sunk === true) {
        const activeTile = document.querySelector(
          "#" + playerNum + " #" + tile,
        );
        activeTile.style.backgroundColor = color;
      }
    }
    for (const shot in this.shotHit) {
      const activeTile = document.querySelector("#" + playerNum + " #" + shot);
      if (this.shotHit[shot] === true) {
        activeTile.textContent = "x";
      } else if (this.shotHit[shot] === false) {
        activeTile.textContent = "o";
      }
    }
  }
}
module.exports = Gameboard;
