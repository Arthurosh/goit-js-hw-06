// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsEl = document.querySelector("#controls");
const boxesEl = document.querySelector("#boxes");

const inputEl = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

// Прошу дати підказку в якому напрямку рухатись далі, тому що зовсім щось
// не можу зрозуміти як вирішити дане питання:
// Кожен елемент після першого повинен бути ширшим і вищим
// від попереднього на 10px.
