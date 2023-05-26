import { getXY, reset, validate } from "./methods.js";
import { O, X, gameProperties } from "./params.js";

export default {
  elements: [
    {
      elementId: "Board",
      method: () => {
        const Boxes = document.getElementsByClassName("Box");

        for (let i = 0; i < Boxes.length; i++) {
          const Box = Boxes[i];
          const [x, y] = getXY(Box.id);
          Box.addEventListener("click", () => {
            if (
              gameProperties.playerToMove === "Red" &&
              Box.innerHTML === "" &&
              gameProperties.gameStatus === "ongoing"
            ) {
              gameProperties.playerToMove = "Blue";
              validate(x, y);
            } else if (
              gameProperties.playerToMove === "Blue" &&
              Box.innerHTML === "" &&
              gameProperties.gameStatus === "ongoing"
            ) {
              gameProperties.playerToMove = "Red";
              validate(x, y);
            }
          });
        }

        const WinnerBoard = document.getElementById("WinnerBoard");
        WinnerBoard.addEventListener("click", () => {
          if (gameProperties.gameStatus === "over") {
            reset();
          }
        });
      },
      onlyOnce: true,
    },
  ],
  events: [
    {
      eventName: "click",
      eventTarget: "body",
      eventIds: ["Board"],
    },
  ],
};
