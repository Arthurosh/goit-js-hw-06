const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const createEl = ingredients.map((ingredient) => {
  const liItemEl = document.createElement("li");
  liItemEl.classList = "item";
  liItemEl.textContent = ingredient;
  return liItemEl;
});

const ulEl = document.querySelector("#ingredients");
ulEl.append(...createEl);

console.log(ulEl);
