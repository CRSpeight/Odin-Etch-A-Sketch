const gridXY = 16;

const gridContainer = document.querySelector("#gridContainer");
const createCustomGrid = document.querySelector("#createCustomGrid");

createCustomGrid.addEventListener("click", gridUserInput);

drawGrid(gridXY);

function gridUserInput() {
  let gridSize = prompt("Please pick a grid size between 1 and 100");
  while (isNaN(gridSize) || gridSize > 100 || gridSize < 1) {
    gridSize = prompt(
      "Invalid grid size, please pick a grid size between 1 and 100"
    );
  }
  drawGrid(gridSize);
}

function drawGrid(axisSize) {
  gridContainer.innerHTML = "";
  gridContainer.style.gridTemplateColumns = `repeat(${axisSize}, 1fr)`;

  for (let i = 0; i < axisSize; i++) {
    for (let j = 0; j < axisSize; j++) {
      let gridNode = document.createElement("div");
      gridNode.classList.add("gridNode");
      gridNode.addEventListener("mouseover", hoverFunction);
      gridContainer.appendChild(gridNode);
    }
  }
}

function hoverFunction(e) {
  e.target.classList.add("selected");
}
