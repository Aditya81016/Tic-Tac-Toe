import Board from "./components/Board.js";
import ScoreBoard from "./components/ScoreBoard.js";

const ScoreBoardHtml = ScoreBoard();

export default `
    <div id="App">
        ${ScoreBoardHtml}
        ${Board()}
        <div class="hiddenOnPC">
            ${ScoreBoardHtml}
        </div>
    </div>
`;
