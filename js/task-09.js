// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  bodyEl: document.body,
  spanColorEl: document.querySelector(".color"),
  btnColorEl: document.querySelector(".change-color"),
};

refs.btnColorEl.addEventListener("click", changeBg);

function changeBg() {
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
  refs.spanColorEl.textContent = getRandomHexColor();
}
