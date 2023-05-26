import { pickRandom } from "./methods.js";

export const gameProperties = {
  gameStatus: "ongoing",
  playerToMove: pickRandom(["Red", "Blue"]),
  boardMatrix: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
  RedChain: [],
  BlueChain: [],
  RedPoints: 0,
  BluePoints: 0,
  updateRedScore: () => {},
  updateBlueScore: () => {},
  updateWinnerBoard: () => {},
};

export const X = `<div class="red">X</div>`;
export const O = `<div class="blue">O</div>`;
