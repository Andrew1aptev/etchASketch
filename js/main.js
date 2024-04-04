const field = document.querySelector(".field__wrapper");
const eraseBtn = document.querySelector(".erase-btn");
const inputElement = document.querySelector(".field__input");

// Функция для создания блоков
function createBlocks(number) {
    // Если число не указано, используем значение по умолчанию 16
    number = number || 16;
    // Очищаем поле перед созданием новых блоков
    field.innerHTML = '';
    // Создаем строки
    for (let rowIndex = 0; rowIndex < number; rowIndex++) {
        const row = document.createElement("div");
        row.classList.add("row");
        field.appendChild(row);
    // В каждой строке создаем столбцы
        for (let columnIndex = 0; columnIndex < number; columnIndex++) {
            const column = document.createElement("div");
            column.classList.add("column");
            row.appendChild(column);
        }
    }
}

// Добавляем обработчик событий для поля ввода
inputElement.addEventListener('change', function() {
    // Получаем значение из поля ввода
    let inputValue = inputElement.value;
    // Преобразуем значение в число
    let numberValue = parseInt(inputValue);

    // Проверяем, находится ли число в допустимом диапазоне
    if (numberValue < 2) {
        numberValue = 2;
        inputElement.value = numberValue;
    } else if (numberValue > 100) {
        numberValue = 100;
        inputElement.value = numberValue;
    }

    // Создаем блоки на основе введенного числа
    createBlocks(numberValue);
});
// вызываем функцию для того чтобы изначально было 16х16
createBlocks(16);

window.onload = function() {
    inputElement.value = '';
};

// // generate random background color
// function randomColor() {
//     function getRandomIntInclusive(min, max) {
//         min = Math.ceil(0);
//         max = Math.floor(255);
//         return Math.floor(Math.random() * (max - min + 1) + min); // Максимум и минимум включаются
//     }

//     let firstNumber = Number(getRandomIntInclusive());
//     let secondNumber = Number(getRandomIntInclusive());
//     let thirdNumber = Number(getRandomIntInclusive());
//     return `rgb(${firstNumber},${secondNumber},${thirdNumber})`;
// }

// function paintBlock() {
//     const columns = document.querySelectorAll(".column");
//     const randomColorBtn = document.querySelector(".random-color-btn"); // предположим, что у вас есть кнопка с id="randomColorBtn"
//     let isDrawing = false;
//     let randomBtnClick = false;

//     // проверка нажата ли левая клавиша мыши
//     document.addEventListener('mousedown', function(event) {
//         if (event.button == 0) { 
//             isDrawing = true;
//         }
//     });

//     document.addEventListener('mouseup', function(event) {
//         if (event.button == 0) { 
//             isDrawing = false;
//         }
//     });

//     // Проверка нажата ли кнопка random color
//     randomColorBtn.addEventListener("click", function(event){
//         randomBtnClick = !randomBtnClick;
//     })
    
//     columns.forEach(element => {
//         element.addEventListener("mousemove", function () {
//             if (isDrawing) {
//                 if(randomBtnClick){
//                     element.style.background = randomColor();
//                 } else {
//                     element.style.background = "black";
//                 }
//             }
//         })
//     });

//     columns.forEach(element => {
//         eraseBtn.addEventListener("click", function(){
//             element.style.background = "rgb(255,255,255)";
//         })
//     })
// }

// paintBlock()



