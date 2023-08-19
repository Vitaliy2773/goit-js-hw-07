import { galleryItems } from './gallery-items.js';


console.log(galleryItems);


const galleryList = document.querySelector(".gallery")


const renderGallery = (arr) => { 
    return arr.map(item => `<li  class="gallery__item ">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image "
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`).join("")

}

const gallery = renderGallery(galleryItems)

galleryList.innerHTML = gallery


const lightbox = new SimpleLightbox('.gallery a', {captionsData:"alt",captionDelay: 250});
