let padSize = 16;

function changeColorOnMouseOver(e) {
    if (e.buttons == 1) this.style.background = document.getElementById("color").value;
}

function changeColorOnMouseDown(e) {
    this.style.background = document.getElementById("color").value;
}

function clearPad(e) {
    const elements = document.querySelectorAll(".element");
    elements.forEach(element => element.style.background = 'white');
}

function changeSize(e) {

    padSize = Number(prompt("Please enter new size (100 max)", "16"));

    let pad = document.querySelector(".pad");

    while (pad.firstChild) pad.removeChild(pad.firstChild);

    generatePad(padSize);
}

function generatePad(newSize) {
    const pad = document.querySelector(".pad");

    for (let i = 0; i < padSize; ++i) {

        let row = document.createElement('div');
        row.classList.add('row');

        for (let j = 0; j < padSize; ++j) {

            let div = document.createElement('div');
            div.classList.add('element');
            div.addEventListener("mouseover", changeColorOnMouseOver);
            div.addEventListener("mousedown", changeColorOnMouseDown);

            row.appendChild(div);
        }

        pad.appendChild(row);
    }
}

const clear_button = document.querySelector('#clear-button');
clear_button.addEventListener('click', clearPad);

const size_button = document.querySelector('#size-button');
size_button.addEventListener('click', changeSize);

generatePad();
