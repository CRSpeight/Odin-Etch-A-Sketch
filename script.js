const gridXY = 16;

const gridContainer = document.querySelector("#gridContainer");

drawGrid(gridXY);

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
