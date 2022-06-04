import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
let kek;

gallery.insertAdjacentHTML('afterbegin', galleryItems
.map(
  items => `<div class="gallery__item"><a class="gallery__link" href="${items.original}"> <img
                class="gallery__image"
                src="${items.preview}"
                data-source="${items.original}"
                alt="${items.description}"/></a></div>`
)
.join(''));

gallery.addEventListener('click', event=>{
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
      return;
    }
    kek = basicLightbox.create(`<img src="${event.target.dataset.source}">`);
    kek.show();
  });