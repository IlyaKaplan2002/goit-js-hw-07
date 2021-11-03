import { galleryItems } from './gallery-items.js';
import * as basicLightbox from 'basiclightbox';

// Change code below this line
const gallery = document.querySelector('.gallery');

const makeGalleryItem = item => {
  const galleryItem = document.createElement('div');
  galleryItem.classList.add('gallery__item');

  const galleryLink = document.createElement('a');
  galleryLink.classList.add('gallery__link');
  galleryLink.href = item.original;

  const galleryImage = document.createElement('img');
  galleryImage.classList.add('gallery__image');
  galleryImage.src = item.preview;
  galleryImage.dataset.source = item.original;
  galleryImage.alt = item.description;

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);

  return galleryItem;
};

const galleryMarkup = document.createDocumentFragment();

galleryItems.map(item => galleryMarkup.appendChild(makeGalleryItem(item)));

gallery.appendChild(galleryMarkup);

const onGalleryClick = e => {
  e.preventDefault();
  const elem = e.target;

  if (!elem.classList.contains('gallery__image')) {
    return;
  }

  const source = elem.dataset.source;

  basicLightbox.create(`<img src=${source}>`).show();
};

gallery.addEventListener('click', onGalleryClick);
