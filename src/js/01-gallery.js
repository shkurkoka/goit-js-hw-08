// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);


const gallery = document.querySelector('.gallery');

galleryItems.forEach((item, index) => {

    gallery.insertAdjacentHTML("beforeend", `
        <li class="gallery__item">
            <a class="gallery__link" href="${item.original}" alt="${item.description}">
                <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
            </a>
        </li>
    `);

});

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
    captionPosition: "bottom-left"
});
