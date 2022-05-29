import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryFull = document.querySelector('.gallery');
// makeem a lightbox
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.append(lightbox);
// delaem galery i otkrivaem
for (let el of galleryItems) {
    const a = document.createElement('a');
    a.className = 'gallery__link'
    const image = document.createElement('img');
    image.src = el.preview;
    image.alt = el.description;
    image.className = 'gallery__image';
    a.append(image);
    galleryFull.append(a);
    a.addEventListener('click', event => {
        lightbox.classList.add('active');
        const img = document.createElement('img')
        img.src = el.original;
        img.style.width = '60vw';
        while (lightbox.firstChild){
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.append(img)
    })
}
// zakrivaem
lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget){return}
    lightbox.classList.remove('active')
})
console.log(galleryItems);
