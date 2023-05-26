export default function PlayerBoard({ player, score }) {
  const id = player;

  return {
    updateScore: (newScore) => {
      const score = document.getElementById(id + "-score");
      score.innerText = newScore;
    },
    html: `
    <div class="PlayerBoard" id="${id}">
        <h1 class="Player" id="${id}-player">${player}</h1>
        <h1 class="Score" id="${id}-score">${score}</h1>
    </div>
    `,
  };
}
