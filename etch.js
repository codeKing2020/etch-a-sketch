const container = document.querySelector("#container");
let numberOfPixels = 256;

const button = document.querySelector("#promptUserButton");
button.addEventListener('click', () => promptUser());

buildGrid()

function promptUser() {
    let userInput = +prompt("How many squares per side?")
    if (typeof userInput == "Number" || userInput >= 2 || userInput <= 100) {
        numberOfPixels = userInput * userInput;
        container.style.gridTemplateRows = `repeat(${userInput}, 20px)`;
        container.style.gridTemplateColumns = `repeat(${userInput}, 20px)`;
        buildGrid();
    } else {
        alert("wrong value entered. Enter a number between 2 and 100")
    }
}

function buildGrid() {
    for (let i = 0; i < numberOfPixels; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.addEventListener('mouseover', (box) => changeColor(box));
        container.appendChild(box);
    }
}

function changeColor(box) {
    const specificBox = box.target;
    const color = `rgb(${getRandomInt(0, 256)}, ${getRandomInt(0, 256)}, ${getRandomInt(0, 256)})`
    specificBox.style.backgroundColor = color;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}