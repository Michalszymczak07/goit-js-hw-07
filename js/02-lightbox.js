import { galleryItems } from './gallery-items.js';
// Change code below this line
let gallery = document.querySelector(".gallery");
galleryItems.forEach((item) => {
    gallery.insertAdjacentHTML("afterbegin",
     `
  <a class="gallery__item" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.original}"
      
      alt="${item.description}"
    />
  </a>
`)
    const link = document.querySelector(".gallery__item");

    link.addEventListener('click', function (e) {
        e.preventDefault()
    })
})
console.log(galleryItems);

let lightbox = new SimpleLightbox(".gallery a", {
        captions: "true",
        captionSelector: "img",
        captionType: "string",
        captionsData: 'alt',
        captionPosition: "bottom",
        captionDelay: "250",
    });