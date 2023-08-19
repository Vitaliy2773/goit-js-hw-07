import { galleryItems } from './gallery-items.js';





const galleryList = document.querySelector(".gallery")


const renderGallery = (arr) => { 
    return arr.map(item => `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`).join("")

}

const gallery = renderGallery(galleryItems)

galleryList.innerHTML = gallery


const selectedImg = (e) => {
    e.preventDefault()
    const { target } = e
    if (target.nodeName !== "IMG") {
        return;
    }
    const instance = basicLightbox.create(`
   <img src="${target.dataset.source}" width="800" height="600">
  `);
    instance.show()



    galleryList.addEventListener("keydown", (e) => {
        if (e.code === "Escape") {
          instance.close();
      
        }
    })
  
     galleryList.removeEventListener("keydown", (e) => {
        if (e.code === "Escape") {
            instance.close();
        }
    })
}

    galleryList.addEventListener("click", selectedImg)

