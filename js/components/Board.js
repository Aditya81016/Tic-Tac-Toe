import Box from "../assets/Box.js";

export default function () {
  const Board = document.getElementById("Board");

  document.body.onload = () => {
    const Board = document.getElementById("Board");
  };

  return `
  <div id="Board">
    <div class="row" id="Top">
      ${Box({ id: "id-0-0", right: true, bottom: true })}
      ${Box({ id: "id-0-1", bottom: true, right: true })}
      ${Box({ id: "id-0-2", bottom: true })}
    </div>
    <div class="row" id="Center">
      ${Box({ id: "id-1-0", right: true, bottom: true })}
      ${Box({ id: "id-1-1", bottom: true, right: true })}
      ${Box({ id: "id-1-2", bottom: true })}
    </div>
    <div class="row" id="Bottom">
      ${Box({ id: "id-2-0", right: true })}
      ${Box({ id: "id-2-1", right: true })}
      ${Box({ id: "id-2-2" })}
    </div>
  </div>
`;
}
