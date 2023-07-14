// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

const pictures = document.querySelector('.gallery');

const markup = galleryItems.map((elem) =>
`<li class="gallery__item">
   <a class="gallery__link" href="${elem.original}">
      <img class="gallery__image" src="${elem.preview}" alt="${elem.description}" />
   </a>
</li>
`).join('');

pictures.insertAdjacentHTML("beforeend", markup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
