import { X, O, gameProperties } from "./params.js";

export function pickRandom(array) {
  const length = array.length;
  const randomIndex = Math.floor(Math.random() * length);
  return array[randomIndex];
}

export function getXY(id) {
  id = id.replace("id-", "");
  return id.split("-");
}

export function validate(x, y) {
  const playerMoved = gameProperties.playerToMove === "Red" ? "Blue" : "Red";

  validatePlayerMoved(playerMoved, x, y);
  validateMatrix();
  renderMatrix();
  let won = checkForWinner(playerMoved);

  if (won) {
    gameProperties.gameStatus = "over";
    gameProperties.updateWinnerBoard(`${playerMoved} Won!`);
    if (playerMoved === "Red") {
      gameProperties.updateRedScore(++gameProperties.RedPoints);
    } else if (playerMoved === "Blue") {
      gameProperties.updateBlueScore(++gameProperties.BluePoints);
    }
  }
}

export function reset() {
  gameProperties.gameStatus = "ongoing";
  gameProperties.boardMatrix = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  gameProperties.RedChain = [];
  gameProperties.BlueChain = [];
  renderMatrix();
  gameProperties.updateWinnerBoard("VS");
}

function validatePlayerMoved(playerMoved, x, y) {
  if (playerMoved === "Red") {
    gameProperties.RedChain.push(`id-${x}-${y}`);

    if (gameProperties.RedChain.length === 4) {
      gameProperties.RedChain.splice(0, 1);
    }
  } else if (playerMoved === "Blue") {
    gameProperties.BlueChain.push(`id-${x}-${y}`);
    if (gameProperties.BlueChain.length === 4) {
      gameProperties.BlueChain.splice(0, 1);
    }
  }
}

function validateMatrix() {
  gameProperties.boardMatrix = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  gameProperties.RedChain.forEach((element) => {
    const [x, y] = getXY(element);
    gameProperties.boardMatrix[x][y] = "X";
  });

  gameProperties.BlueChain.forEach((element) => {
    const [x, y] = getXY(element);
    gameProperties.boardMatrix[x][y] = "O";
  });
}

function renderMatrix() {
  const Boxes = document.getElementsByClassName("Box");

  for (let index = 0; index < Boxes.length; index++) {
    const Box = Boxes[index];
    Box.innerHTML = "";
  }

  gameProperties.RedChain.forEach((element) => {
    const Box = document.getElementById(element);
    Box.innerHTML = X;
  });

  gameProperties.BlueChain.forEach((element) => {
    const Box = document.getElementById(element);
    Box.innerHTML = O;
  });
}

function checkForWinner(playerMoved) {
  let won = false;
  const turn = playerMoved === "Red" ? "X" : "O";

  for (let i = 0; i < 3; i++) {
    if (
      // * Checks for same turn in row
      (gameProperties.boardMatrix[i][0] === gameProperties.boardMatrix[i][1] &&
        gameProperties.boardMatrix[i][1] === gameProperties.boardMatrix[i][2] &&
        gameProperties.boardMatrix[i][2] === turn) ||
      // * Checks for same turn in column
      (gameProperties.boardMatrix[0][i] === gameProperties.boardMatrix[1][i] &&
        gameProperties.boardMatrix[1][i] === gameProperties.boardMatrix[2][i] &&
        gameProperties.boardMatrix[2][i] === turn)
    ) {
      won = true;
    }
  }

  if (
    // * Checks for same turn in left-top to right-bottom direction
    (gameProperties.boardMatrix[0][0] === gameProperties.boardMatrix[1][1] &&
      gameProperties.boardMatrix[1][1] === gameProperties.boardMatrix[2][2] &&
      gameProperties.boardMatrix[2][2] === turn) ||
    // * Checks for same turn in right-top to left-bottom direction
    (gameProperties.boardMatrix[0][2] === gameProperties.boardMatrix[1][1] &&
      gameProperties.boardMatrix[1][1] === gameProperties.boardMatrix[2][0] &&
      gameProperties.boardMatrix[2][0] === turn)
  ) {
    won = true;
  }

  return won;
}
