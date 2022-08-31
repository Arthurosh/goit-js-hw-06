const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const ulEl = document.querySelector(".gallery");

const galleryEl = images.map((item) => {
  return `<li class="gallery__item"><img src=${item.url} alt=${item.alt}></img></li>`;
});

ulEl.insertAdjacentHTML("beforeend", galleryEl.join(""));

// const galleryEl = images.map((image) => {
//   const liItemEl = document.createElement("li");
//   const imageEl = document.createElement("img");
//   liItemEl.classList = "gallery__item";
//   imageEl.src = image.url;
//   imageEl.alt = image.alt;

//   liItemEl.append(imageEl);
//   return liItemEl;
// });

// const ulEl = document.querySelector(".gallery");
// ulEl.append(...galleryEl);

console.log(ulEl);
