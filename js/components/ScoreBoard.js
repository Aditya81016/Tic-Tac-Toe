import { gameProperties } from "../../lib/params.js";
import PlayerBoard from "./PlayerBoard.js";

export default function ScoreBoard() {
  const { html: RedHtml, updateScore: updateRedScore } = PlayerBoard({
    player: "Red",
    score: gameProperties.RedPoints,
  });

  const { html: BlueHtml, updateScore: updateBlueScore } = PlayerBoard({
    player: "Blue",
    score: gameProperties.BluePoints,
  });

  gameProperties.updateRedScore = updateRedScore;
  gameProperties.updateBlueScore = updateBlueScore;
  gameProperties.updateWinnerBoard = (innerText) => {
    const WinnerBoard = document.getElementById("WinnerBoard");
    WinnerBoard.innerText = innerText;
  };

  return `
    <div id="ScoreBoard">
        ${RedHtml}
        <h1 id="WinnerBoard">VS</h1>
        ${BlueHtml}
    </div>
    `;
}
