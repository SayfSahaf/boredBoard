const slider = document.getElementById('slider')
const board = document.getElementById("board");
const sValue = document.getElementById('sliderValue');
const cPicker = document.getElementById('colorPicker')

let currentColor = '#000000'

cPicker.addEventListener('input', function() {
    currentColor = cPicker.value;
})

function changeColor() {
    this.style.backgroundColor = currentColor;
}

function drawBoard() {
    let boxCount = slider.value;
    let actlCount = boxCount*boxCount;
    let boxSize = Math.round(608/boxCount);
    sValue.innerText = slider.value + ' x ' + slider.value ;
    board.innerHTML = ''
    board.style.gridTemplateColumns = `repeat(${boxCount}, ${boxSize}px)`;

    for (let i = 0; i < actlCount; i++) {
        const box = document.createElement("div")
        box.style.height = `${boxSize}px`
        box.style.width = `${boxSize}px`
        box.classList.add("box")
        box.addEventListener('click', changeColor)
        board.appendChild(box)
    }

}

//initial board when website is first loaded up
drawBoard();

//new board is generated everytime the slider is changed
slider.addEventListener('input', drawBoard)








