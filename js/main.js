const field = document.querySelector(".field__wrapper");

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
createBlocks(100);

function paintBlock() {
    const columns = document.querySelectorAll(".column");

    document.addEventListener('mousedown', function(event) {
        if (event.button == 0) { // 0 - это код левой кнопки мыши
            columns.forEach(element => {
                element.addEventListener("mouseenter", function () {
                    element.style.background = randomColor();
                })
            });
        }
    });

}
paintBlock();
