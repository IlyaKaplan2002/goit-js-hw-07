import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
  })
  .join('');

galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

galleryRef.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  instance.element().querySelector('img').src = e.target.dataset.source;

  instance.show();
});

window.addEventListener('keydown', e => {
  if (e.code === 'Escape') {
    instance.close();
  }
});

const instance = basicLightbox.create(`<img src="" />`, {
  onShow: instance => ('onShow', instance),
  onClose: instance => ('onClose', instance),
});
