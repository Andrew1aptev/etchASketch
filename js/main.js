const field = document.querySelector(".field__wrapper");
const defaultColorBtn = document.querySelector(".default-color-btn");
const randomColorBtn = document.querySelector(".random-color-btn");
const eraseBtn = document.querySelector(".erase-btn");
// generate random background color
function randomColor() {
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(0);
        max = Math.floor(255);
        return Math.floor(Math.random() * (max - min + 1) + min); // Максимум и минимум включаются
    }

    let firstNumber = Number(getRandomIntInclusive());
    let secondNumber = Number(getRandomIntInclusive());
    let thirdNumber = Number(getRandomIntInclusive());
    return `rgb(${firstNumber},${secondNumber},${thirdNumber})`;
}

function createBlocks(number) {
    for (let index = 0; index < number; index++) {
        const row = document.createElement("div");
        row.classList.add("row")
        field.appendChild(row);

        for (let index = 0; index < number; index++) {
            const column = document.createElement("div");
            column.classList.add("column");
            row.appendChild(column);

        }
    }
}
createBlocks(16);


function paintBlock() {
    const columns = document.querySelectorAll(".column");
    let isDrawing = false;
    document.addEventListener('mousedown', function(event) {
        if (event.button == 0) { 
            isDrawing = true;
        }
    });

    document.addEventListener('mouseup', function(event) {
        if (event.button == 0) { 
            isDrawing = false;
        }
    });

    columns.forEach(element => {
        element.addEventListener("mousemove", function () {
            if (isDrawing) {
                element.style.background = "black";
            }
        })
    });

    columns.forEach(element => {
        eraseBtn.addEventListener("click", function(){
            element.style.background = "rgb(255,255,255)";
        })
    })
}

paintBlock();

