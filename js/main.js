const field = document.querySelector(".field__wrapper");
const eraseBtn = document.querySelector(".erase-btn");
const inputElement = document.querySelector(".field__input");
const randomColorBtn = document.querySelector(".random-color-btn")
const borderBtn = document.querySelector(".border-btn")
const colorPicker = document.querySelector(".color-picker");

function randomColor(){
    return `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
}
let randomColorBtnCheck = false;
randomColorBtn.addEventListener("click",()=>{
    randomColorBtnCheck = !randomColorBtnCheck;
})
function drawing(){
    const columns = document.querySelectorAll(".column");
    columns.forEach(element => {
        element.addEventListener("mouseenter", function(event){
            // если нажата левая кнопка мыши, то меняем цвет фона на черный
            if(event.buttons === 1){
                
                    element.style.background = randomColorBtnCheck ? randomColor() : colorPicker.value;
            } 
            // отключаем выделение и перетаскивание
            element.style.userSelect = "none";

        })
    });
    // когда нажимаем на кнопку Erase, то проходимся по всем элементам
    // в columns и меняем каждый на белый цвет
    eraseBtn.addEventListener("click", () => {
        columns.forEach(element => {
            element.style.background = "rgb(255,255,255)"
        })
    })
    // добавляем проверку на нажатие кнопки borderbtn
    let borderBtnCheck = false;
    borderBtn.addEventListener("click", () => {
        borderBtnCheck = !borderBtnCheck;
    })
    borderBtn.addEventListener("click", () => {
        columns.forEach(element => {
            element.style.border = borderBtnCheck ? "none" : "1px solid rgb(158, 158, 158)"
        })
    })
}

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
    drawing();
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
// вызываем функцию для того чтобы изначально было 64х64
createBlocks(64);

window.onload = function() {
    inputElement.value = '';
};



