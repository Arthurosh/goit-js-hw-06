const liItemEl = document.querySelector("#categories");
console.log(`Number of categories: ${liItemEl.children.length}`);

const liChildEl = liItemEl.children;
for (let li of liChildEl) {
  console.log(`Category: ${li.firstElementChild.textContent}`);
  console.log(`Elements: ${li.lastElementChild.children.length}`);
}
