let boxCount = 16;
let actlCount = boxCount*boxCount;
let boxSize = Math.round(608/boxCount);

const board = document.getElementById("board");
board.style.gridTemplateColumns = `repeat(${boxCount}, ${boxSize}px)`;


for (let i = 0; i < actlCount; i++) {
    const box = document.createElement("div")
    box.style.height = `${boxSize}px`
    box.style.width = `${boxSize}px`
    box.classList.add("box")
    board.appendChild(box)
}



