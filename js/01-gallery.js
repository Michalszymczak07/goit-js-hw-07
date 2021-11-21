import { galleryItems } from './gallery-items.js';
// Change code below this line
let gallery = document.querySelector(".gallery");
galleryItems.forEach((item) => {
    gallery.insertAdjacentHTML("afterbegin",
     `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.original}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`)
    const link = document.querySelector(".gallery__link");

    link.addEventListener('click', function (e) {
        e.preventDefault()
    })
})


let photo = document.querySelector(".gallery__image");

    const showPhoto = (e) => {
        const instance = basicLightbox.create(
            `<img src="${e.target.src}" width="800" height="600">`);
        instance.show();
        
    };

    gallery.addEventListener("click", showPhoto);
    
    
console.log(galleryItems);

